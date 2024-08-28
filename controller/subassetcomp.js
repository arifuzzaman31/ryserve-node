const asyncHandler = require("express-async-handler");
const prisma = require("../db/prisma");
const ownerService = require("../services/ownerService");

exports.create_subassetcomp = asyncHandler(async (req, res) => {
  const data = await req.body;
  try {
    const dataId = await ownerService.propertyBy(req.user);
    if (dataId == "all") {
      const owner = await prisma.asset.findFirst({
        where: {
          id: data.assetId,
        },
        include: {
          business: {
            select: { id: true, ownerId: true },
          },
        },
      });
      data.ownerId = owner.business.ownerId;
    } else {
      data.ownerId = dataId;
    }
    const result = await prisma.$transaction(async (prisma) => {
      const subassetComp = await prisma.SubAssetComponent.create({
        data: {
          asset: { connect: { id: data.assetId } },
          subAsset: { connect: { id: data.subAssetId } },
          owner: { connect: { id: data.ownerId } },
          type: data.type,
          listingName: data.listingName,
          slot: data.slot,
          offday: data.offday,
          image: data.image,
          isEvent: data.isEvent,
          event: data.event,
          terms: data.terms,
          cuisines: data.cuisines,
          description: data.description,
          reservationCategory: data.reservationCategory,
          status: data.status == "true" ? true : false,
        },
      });
      const { id } = subassetComp;
      if (data.table && data.table.length > 0) {
        await prisma.Table.createMany({
          data: data.table.map((tbl) => ({
            subAssetCompId: id,
            type: tbl.type,
            capacity: tbl.capacity ? parseInt(tbl.capacity, 10) : 1,
            position: tbl.position,
            size: tbl.size,
            image: tbl.image,
            splitable: tbl.splitable == "true" ? true : false,
            ryservable: tbl.ryservable == "true" ? true : false,
            status: tbl.status == "true" ? true : false,
          })),
        });
      }
      if (data.pricing && data.pricing.length > 0) {
        await prisma.Pricing.create({
          data: {
            subAsset: { connect: { id: data.subAssetId } },
            subAssetComp: { connect: { id: id } },
            type: "FOOD",
            currency: "BDT",
            basePrice: 0,
            discount: 0,
            pricing: data.pricing,
            status: true,
          },
        });
      }
      return subassetComp;
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message );
  }
});

exports.subassetcomp_list = asyncHandler(async (req, res) => {
  const { pageNo, perPage } = req.query;
  const dataId = await ownerService.propertyBy(req.user);
  let where = {};
  if (dataId != "all") {
    where.ownerId = dataId;
  }
  const { keyword } = req.query;
  if (keyword) {
    where.listingName = {
      contains: keyword,
      mode: "insensitive",
    };
  }
  if (
    req.user.userType == "BUSINESS_MANAGER" ||
    req.user.userType == "LISTING_MANAGER"
  ) {
    where.assetId = req.user.assetId;
  }
  const perPg = perPage ? Number(perPage) : 10;
  const from = Number(pageNo * perPg) - Number(perPg);

  const [count, subassetComp] = await prisma.$transaction([
    prisma.SubAssetComponent.count({ where }),
    prisma.SubAssetComponent.findMany({
      skip: pageNo ? from : 0,
      take: perPg,
      where,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        assetId: true,
        subAssetId: true,
        ownerId: true,
        type: true,
        listingName: true,
        reservationCategory: true,
        status: true,
        asset: { select: { id: true, propertyName: true } },
        tables: true,
        prices: true,
      },
    }),
  ]);

  res.status(200).send({
    pagination: {
      total: Math.ceil(count / perPg),
    },
    data: subassetComp,
  });
});

exports.get_subassetcomp = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const subassetcomp = await prisma.SubAssetComponent.findFirst({
    where: {
      id: id,
    },
    include: {
      asset: { select: { id: true, propertyName: true } },
      owner: { select: { id: true, name: true } },
    },
  });
  res.status(200).send(subassetcomp);
});

exports.subassetcomp_update = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const data = await req.body;
  try {
    const subData = {};
    const prevasset = await prisma.SubAssetComponent.findFirst({
      where: {
        id: id,
      },
    });
    const prepareData = { ...prevasset, ...data };

    let assetConn = data.assetId ? data.assetId : prepareData.assetId;
    let subAssetConn = data.subAssetId
      ? data.subAssetId
      : prepareData.subAssetId;
    prepareData.asset = { connect: { id: assetConn } };
    prepareData.subAsset = { connect: { id: subAssetConn } };
    prepareData.status = data.status == "true" ? true : false;
    subData.prices = prepareData.pricing;
    subData.tables = prepareData.table;

    delete prepareData["id"];
    delete prepareData["assetId"];
    delete prepareData["subAssetId"];
    delete prepareData["pricingId"];
    delete prepareData["ownerId"];
    delete prepareData["pricing"];
    delete prepareData["table"];
    delete prepareData["createdAt"];
    delete prepareData["updatedAt"];
    delete prepareData["deleted"];
    const result = await prisma.$transaction(async (prisma) => {
      const subassetComp = await prisma.SubAssetComponent.update({
        where: {
          id: id,
        },
        data: prepareData,
      });
      if (subData.tables && subData.tables.length > 0) {
        await Promise.all(
          subData.tables.map(async (tbl) => {
            if (tbl.id) {
              await prisma.table.update({
                where: { id: tbl.id },
                data: {
                  type: tbl.type,
                  capacity: tbl.capacity ? parseInt(tbl.capacity, 10) : 1,
                  position: tbl.position,
                  size: tbl.size,
                  image: tbl.image,
                  splitable: tbl.splitable === "true",
                  ryservable: tbl.ryservable === "true",
                  status: tbl.status === "true",
                },
              });
            } else {
              await prisma.Table.create({
                data: {
                  subAssetCompId: subassetComp.id,
                  type: tbl.type,
                  capacity: tbl.capacity ? parseInt(tbl.capacity, 10) : 1,
                  position: tbl.position,
                  size: tbl.size,
                  image: tbl.image,
                  splitable: tbl.splitable == "true" ? true : false,
                  ryservable: tbl.ryservable == "true" ? true : false,
                  status: tbl.status == "true" ? true : false,
                },
              });
            }
          })
        );
      }

      if (subData.prices && subData.prices.length > 0) {
        const priceId = data.pricingId;
        if (priceId) {
          await prisma.Pricing.update({
            where: { id: priceId },
            data: {
              type: "FOOD",
              currency: "BDT",
              basePrice: 0,
              discount: 0,
              pricing: subData.prices,
              status: true,
            },
          });
        } else {
          await prisma.Pricing.create({
            data: {
              subAsset: { connect: { id: subassetComp.subAssetId } },
              subAssetComp: { connect: { id: subassetComp.id } },
              type: "FOOD",
              currency: "BDT",
              basePrice: 0,
              discount: 0,
              pricing: subData.prices,
              status: true,
            },
          });
        }
      }
      return subassetComp;
    });
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
exports.delete_subassetcomp = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const subassetcomp = await prisma.SubAssetComponent.delete({
    where: {
      id: id,
    },
  });
  res.status(200).send(subassetcomp);
});

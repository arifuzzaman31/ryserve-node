const asyncHandler = require("express-async-handler");
const prisma = require("../../db/prisma");
const ownerService = require("../../services/ownerService");
const helper = require("../../helper/helper");

exports.create_asset = asyncHandler(async (req, res) => {
  const data = await req.body;
  try {
    const result = await prisma.$transaction(async (prisma) => {
      const asset = await prisma.asset.create({
        data: {
          assetType: data.assetType,
          propertyName: data.propertyName,
          slug: helper.slugify(data.propertyName),
          business: {
            connect: {
              id: data.businessId,
            },
          },
          country: data.country,
          city: data.city,
          area: data.area,
          logo: data.logo,
          locationPoint: data.locationPoint,
          geoTag: data.geoTag,
          noOfRoom: Number(data.noOfRoom),
          about: data.about,
          status: data.status == "true" ? true : false,
        },
      });
      return asset;
    });
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send(error);
  } finally {
    await prisma.$disconnect();
  }
});

exports.asset_list = asyncHandler(async (req, res) => {
  const { pageNo, perPage, businessId } = req.query;
  const reqUser = await req.user;
  const dataId = await ownerService.propertyBy(reqUser);
  let where = {};
  if (dataId != "all") {
    where = {
      business: {
        ownerId: dataId,
      },
    };
  }
  if (
    reqUser.userType == "BUSINESS_MANAGER" ||
    reqUser.userType == "LISTING_MANAGER"
  ) {
    where.id = reqUser.roles.assetId;
  }
  if (businessId) where = { businessId: parseInt(businessId, 10) };
  const perPg = perPage ? Number(perPage) : 10;
  const from = Number(pageNo * perPg) - Number(perPg);
  const [count, assets] = await prisma.$transaction([
    prisma.Asset.count({ where }),
    prisma.Asset.findMany({
      skip: pageNo ? from : 0,
      take: perPg,
      where,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        business: {
          select: { id: true, businessName: true },
        },
      },
    }),
  ]);

  return res.status(200).send({
    pagination: {
      total: Math.ceil(count / perPg),
    },
    data: assets,
  });
});

exports.asset_get = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const assets = await prisma.asset.findMany({
    where: {
      id: id,
    },
    include: {
      business: {
        include: {
          owner: { select: { id: true, name: true } },
        },
      },
    },
  });
  return res.status(200).send(assets);
});

exports.asset_update = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const data = await req.body;
  try {
    const result = await prisma.$transaction(async (prisma) => {
      const asset = await prisma.asset.update({
        where: {
          id: id,
        },
        data: {
          assetType: data.assetType,
          propertyName: data.propertyName,
          businessId: data.businessId,
          country: data.country,
          city: data.city,
          area: data.area,
          logo: data.logo,
          locationPoint: data.locationPoint,
          geoTag: data.geoTag,
          noOfRoom: Number(data.noOfRoom),
          about: data.about,
          status: data.status == "true" ? true : false,
        },
      });
      return asset;
    });
    return res.status(201).send(result);
  } catch (error) {
    return res.status(400).send(error);
  } finally {
    await prisma.$disconnect();
  }
});
exports.delete_asset = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const asset = await prisma.asset.update({
    where: {
      id: id,
    },
    data: {
      deleted: new Date(),
    },
  });
  return res.status(200).send(asset);
});

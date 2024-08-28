const asyncHandler = require("express-async-handler");
const prisma = require("../db/prisma");

exports.create_table = asyncHandler(async (req, res) => {
  const data = await req.body;
  try {
    const table = await prisma.table.create({
      data: {
        subAssetComponent: { connect: { id: data.subAssetCompId } },
        type: data.type,
        capacity: data.capacity,
        position: data.position,
        image: data.image,
        splitable: data.splitable,
        ryservable: data.ryservable,
        size: data.size,
        status: true,
      },
    });
    res.status(200).send(table);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

exports.table_list = asyncHandler(async (req, res) => {
  const { subAssetCompId, reservationCategory } = await req.query;
  try {
    const tables = await prisma.Table.findMany({
      where: {
        subAssetCompId: Number(subAssetCompId),
        subAssetComponent: {
          reservationCategory: reservationCategory,
        },
      },
      include: {
        subAssetComponent: {
          select: {
            id: true,
            listingName: true,
            // slot: true,
            reservationCategory: true,
          },
        },
      },
    });
    res.status(200).send(tables);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

exports.get_table = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const table = await prisma.Table.findMany({
    where: {
      id: id,
    },
    include: {
      subAssetComponent: {
        select: {
          id: true,
          listingName: true,
          reservationCategory: true,
        },
      },
    },
  });
  res.status(200).send(table);
});

exports.table_update = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const data = await req.body;
  try {
    const table = await prisma.Table.update({
        where: {
          id: id,
        },
        data: {
          type: data.type,
          capacity: data.capacity,
          position: data.position,
          size: data.size,
          image: data.image,
          splitable: data.splitable,
          ryservable: data.ryservable,
          status: data.status == 'true' ? true : false
        },
      });
    res.status(201).send(table);
  } catch (error) {
    res.status(400).send(error);
  }
});
exports.delete_table = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const table = await prisma.table.delete({
    where: {
      id: id,
    },
  });
  res.status(200).send(table);
});

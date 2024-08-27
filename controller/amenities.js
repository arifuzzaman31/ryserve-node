const asyncHandler = require("express-async-handler");
const prisma = require("../db/prisma");

exports.create_amenity = asyncHandler(async (req, res) => {
  const data = await req.body;
  try {
    // return data;
    const amenities = await prisma.amenities.create({
      data: {
        name: data.name,
        icon: data.icon,
        price: Number(data.price),
        status: data.status == "true" ? true : false,
      },
    });
    res.status(200).send(amenities);
  } catch (error) {
    res.status(400).send(error);
  }
});

exports.amenity_list = asyncHandler(async (req, res) => {
  const { status } = req;
  let where = {};
  if (status) {
    where = {
      status: true,
    };
  }
  const amenity = await prisma.amenities.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where,
  });
  res.status(200).send(amenity);
});

exports.update_amenity = asyncHandler(async (req, res) => {
  const data = await req.body;
  const id = parseInt(req.params.id, 10);
  try {
    const amenity = await prisma.amenities.update({
      where: {
        id: id
      },
      data: {
        name: data.name,
        icon: data.icon,
        price: Number(data.price),
        status: data.status == "true" ? true : false,
      },
    });
    res.status(200).send(amenity);
  } catch (error) {
    res.status(400).send(error);
  }
});

exports.get_amenity = asyncHandler(async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const amenities = await prisma.amenities.findFirst({
      where: {
        id: id,
      },
    });
    res.status(200).send(amenities);
  } catch (error) {
    res.status(400).send(error);
  }
});

exports.delete_amenity = asyncHandler(async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const amenities = await prisma.amenities.delete({
      where: {
        id: id,
      },
    });
    res.status(200).send(amenities);
  } catch (error) {
    res.status(400).send(error);
  }
});

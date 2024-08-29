const asyncHandler = require("express-async-handler");
const prisma = require("../../db/prisma");

exports.create_cuisine = asyncHandler(async (req, res) => {
  const data = await req.body;
  try {
    // return data;
    const cuisine = await prisma.cuisine.create({
      data: {
        name: data.name,
        status: data.status == "true" ? true : false,
      },
    });
    return res.status(200).send(cuisine);
  } catch (error) {
    return res.status(400).send(error);
  }
});

exports.cuisine_list = asyncHandler(async (req, res) => {
  const { status } = req;
  let where = {};
  if (status) {
    where = {
      status: true,
    };
  }
  const cuisine = await prisma.cuisine.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where,
  });
  return res.status(200).send(cuisine);
});

exports.update_cuisine = asyncHandler(async (req, res) => {
  const data = await req.body;
  const id = parseInt(req.params.id, 10);
  try {
    const cuisine = await prisma.cuisine.update({
      where: {
        id: id
      },
      data: {
        name: data.name,
        status: data.status == "true" ? true : false,
      },
    });
    return res.status(200).send(cuisine);
  } catch (error) {
    return res.status(400).send(error);
  }
});

exports.get_cuisine = asyncHandler(async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const cuisine = await prisma.cuisine.findFirst({
      where: {
        id: id,
      },
    });
    return res.status(200).send(cuisine);
  } catch (error) {
    return res.status(400).send(error);
  }
});

exports.delete_cuisine = asyncHandler(async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const cuisine = await prisma.cuisine.update({
      where: {
          id: id
      },
      data:{
          deleted: new Date()
      }
  });
    return res.status(200).send(cuisine);
  } catch (error) {
    return res.status(400).send(error);
  }
});

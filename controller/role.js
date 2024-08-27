const asyncHandler = require("express-async-handler");
const prisma = require("../db/prisma");

exports.create_role = asyncHandler(async (req, res) => {
    const data = await req.body;
    try {
        // return data;
        const role = await prisma.RolePermission.create({
            data: {
                name: data.name,
                status: data.status == "true" ? true : false,
            },
        });
        res.status(200).send(role);
    } catch (error) {
        res.status(400).send(error);
    }
});

exports.role_list = asyncHandler(async (req, res) => {
    const { status } = req;
    let where = {};
    if (status) {
        where = {
            status: true,
        };
    }
    const role = await prisma.RolePermission.findMany({
        orderBy: {
            createdAt: "desc",
        },
        where,
    });
    res.status(200).send(role);
});
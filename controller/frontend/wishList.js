const asyncHandler = require("express-async-handler");
const prisma = require("../../db/prisma");

exports.add_to_wishList = asyncHandler(async (req, res) => {
    try {
        const data = await req.body
        const wishList = await prisma.wishList.create({
            data: {
                userId: request.user.id,
                type: data.type,
                subAssetComponentId: data.subAssetComponentId,
                status: data.status == 'true' ? true : false
            },
        });
        return res.status(200).send(wishList);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

exports.get_all_wishList = asyncHandler(async (req, res) => {
    const subassetComp = await prisma.subAssetComponent.findMany({
        where: {
            wishLists: {
                some: {
                    userId: req.user.id
                }
            }
        },
        include: {
            asset: {
                select: { id: true, propertyName: true, city: true, area: true, geoTag: true, country: true, bookingCount: true }
            }
        }
    });
    return res.status(200).send(subassetComp);
})

exports.destroy_wishList = asyncHandler(async (req, res) => {
    const { id } = await req.query
    const wishList = await prisma.wishList.deleteMany({
        where: {
            AND: [
                { userId: req.user.id },
                { subAssetComponentId: id },
            ]
        }
    })
    return res.status(200).send(wishList);
})
const asyncHandler = require("express-async-handler");
const prisma = require("../../db/prisma");
const helper = require("../../helper/helper");

exports.add_to_wishList = asyncHandler(async (req, res) => {
    try {
        const data = request.body
        const wishList = await prisma.wishList.create({
            data: {
                userId: request.user.id,
                type: data.type,
                subAssetComponentId: data.subAssetComponentId,
                status: data.status == 'true' ? true : false
            },
        });
        return wishList;
    } catch (error) {
        console.log('Error creating Wishlist:', error);
    }
})

exports.get_all_wishList = asyncHandler(async (req, res) => {
    const subassetComp = await prisma.subAssetComponent.findMany({
        where: {
            wishLists: {
                some: {
                    userId: user.id
                }
            }
        },
        include: {
            asset: {
                select: { id: true, propertyName: true, city: true, area: true, geoTag: true, country: true, bookingCount: true }
            }
        }
    });
    return subassetComp;
})

exports.destroy_wishList = asyncHandler(async (req, res) => {
    const { id } = request.query
    const wishList = await prisma.wishList.deleteMany({
        where: {
            AND: [
                { userId: request.user.id },
                { subAssetComponentId: id },
            ]
        }
    })
    return wishList;
})
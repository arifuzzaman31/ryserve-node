const asyncHandler = require("express-async-handler");
const prisma = require('../../db/prisma');
const ownerService = require('../../services/ownerService')
const helper = require('../../helper/helper')

exports.create_business = asyncHandler(async (req, res) => {
    let dataId = await ownerService.propertyBy(req.user);
    const data = await req.body
    if (dataId == 'all') {
        dataId = data.partnerId
    }
    try {
        const business = await prisma.business.create({
            data: {
                businessName: data.businessName,
                slug: helper.slugify(data.businessName),
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                businessType: data.businessType,
                serviceType: data.serviceType,
                businessCategory: data.businessCategory,
                country: data.country,
                city: data.city,
                locationPoint: data.locationPoint,
                managerName: data.managerName,
                managerEmail: data.managerEmail,
                managerPhone: data.managerPhone,
                managerAddress: data.managerAddress,
                numberOfEmployee: Number(data.numberOfEmployee),
                tradeLicence: data.tradeLicence,
                tin: data.tin,
                bin: data.bin,
                ownerId: dataId,
                status: data.status == "true" ? true : false
            }
        });
        return res.status(200).send(business);
    } catch (error) {
        return res.status(400).send(error);
    }
})

exports.business_list = asyncHandler(async (req, res) => {
    const { pageNo, perPage } = req.query;
    const dataId = await ownerService.propertyBy(req.user)
    let where = {}
    if (dataId != 'all') {
        where.ownerId = dataId
    }
    // if ((user.userType == 'BUSINESS_MANAGER') || (user.userType == 'LISTING_MANAGER')) {
    //     where.ownerId = user.roles.assetId
    // }
    // return dataId
    const perPg = perPage ? Number(perPage) : 10
    const from = Number(pageNo * perPg) - Number(perPg)
    const [count, business] = await prisma.$transaction([
        prisma.Business.count({ where }),
        prisma.business.findMany({
            skip: pageNo ? from : 0,
            take: perPg,
            where,
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                owner: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    },
                },
            },
        })
    ]);

    return res.status(200).send({
        pagination: {
            total: Math.ceil(count / perPg)
        },
        data: business
    });
})

exports.business_get = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const business = await prisma.business.findMany({
        where: {
            id: id
        },
        include: {
            owner: { select: { id: true, name: true, email: true } }
        }
    })
    return res.status(200).send(business);
})

exports.business_update = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const data = await req.body
    try {
        const business = await prisma.business.update({
            where: {
                id: id,
            },
            data: {
                businessName: data.businessName,
                slug: helper.slugify(data.businessName),
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                businessType: data.businessType,
                serviceType: data.serviceType,
                businessCategory: data.businessCategory,
                country: data.country,
                city: data.city,
                locationPoint: data.locationPoint,
                managerName: data.managerName,
                managerEmail: data.managerEmail,
                managerPhone: data.managerPhone,
                managerAddress: data.managerAddress,
                numberOfEmployee: Number(data.numberOfEmployee),
                tradeLicence: data.tradeLicence,
                tin: data.tin,
                bin: data.bin,
                status: data.status == 'true' ? true : false
            }
        });
        return res.status(200).send(business);
    } catch (error) {
        return res.status(400).send(error);
    }
})
exports.delete_business = asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const business = await prisma.business.update({
        where: {
            id: id
        },
        data:{
            deleted: new Date()
        }
    });
    return res.status(200).send(business);
})
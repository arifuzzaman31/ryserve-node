const asyncHandler = require("express-async-handler");
const prisma = require('../db/prisma');
const ownerService = require('../services/ownerService')

exports.create_subasset = asyncHandler(async (req, res) => {
   const data = await req.body
    try {
        const subasset = await prisma.SubAsset.create({
            data: {
                assetId:data.assetId,
                address: data.address,
                amenities: data.amenities,
                floor: data.floor,
                sqft: Number(data.sqft),
                status: data.status == 'true' ? true : false
            }
        })
        res.status(200).send(subasset); 
    } catch (error) {
        res.status(400).send(error);
    }
})

exports.subasset_list = asyncHandler(async(req,res) => {
    const dataId = await ownerService.propertyBy(req.user)
    const {pageNo,perPage,assetId } = req.query
    let where = {}
    if (dataId != 'all') {
        where = {
            asset: {
                business: {
                    ownerId: dataId
                }
            }
        }
    }
    if (assetId != '') {
        where.assetId = assetId
    }
    if((req.user.userType == 'BUSINESS_MANAGER') || (req.user.userType =='LISTING_MANAGER')){
        where.assetId = req.user.roles.assetId
    }
    // return dataId
    try {
        const perPg = perPage ? Number(perPage) : 10
        const from = Number(pageNo*perPg)-Number(perPg)
        const [count,subassets] = await prisma.$transaction([
            prisma.SubAsset.count({where}),
            prisma.SubAsset.findMany({
                skip: pageNo ? from : 0,
                take: perPg,
                where,
                orderBy: {
                    createdAt: 'desc'
                },
                include:{
                    asset:{select: {id:true,propertyName:true}}
                }
            })
          ]);
        
          res.status(200).send({
            pagination: {
              total: Math.ceil(count / perPg)
            },
            data: subassets
          });
    } catch (error) {
        res.status(400).send(error)
    }
})

exports.get_subasset =  asyncHandler(async(req,res) => {
    const id = parseInt(req.params.id, 10);
    const subasset = await prisma.SubAsset.findFirst({
        where:{
            id:id
        },
        include:{
            asset:{select: {id:true,propertyName:true}}
        }
    })
    res.status(200).send(subasset);
})

exports.subasset_update =  asyncHandler(async(req,res) => {
    const id = parseInt(req.params.id, 10);
    const data = await req.body
    try {
        const asset = await prisma.SubAsset.update({
            where:{
                id: id
            },
            data: {
                assetId:data.assetId,
                address: data.address,
                amenities: data.amenities,
                floor: data.floor,
                sqft: Number(data.sqft),
                status: data.status == 'true' ? true : false
            }
        });
        res.status(201).send(asset);
    } catch (error) {
        res.status(400).send(error);
    }
})
exports.delete_subasset =  asyncHandler(async(req,res) => {
    const id = parseInt(req.params.id, 10);
    const subasset = await prisma.SubAsset.delete({
        where:{
            id:id
        }
    });
    res.status(200).send(subasset);
})
const asyncHandler = require("express-async-handler");
const prisma = require("../../db/prisma");
const ownerService = require("../../services/ownerService")

exports.get_report = asyncHandler(async (req, res) => {
    const {pageNo,perPage,status,event,startDate,endDate} = req.query;
    const dataId = await ownerService.propertyBy(req.user)
    let where = {}
    if(dataId != 'all'){
       where.ownerId= dataId
    }
    if ((req.user.userType == 'BUSINESS_MANAGER') || (req.user.userType == 'LISTING_MANAGER')) {
        where.assetId = req.user.assetId
    }
    if(status) where.status = status
    if(event){ 
        if(event == 'Regular'){ 
            where.bookingType = 'Regular'
        } else {
            where.bookingType = {
                    not: 'Regular',
                }
        }
    }
    
    if(startDate && endDate){
        where.startDate = {
                gte: new Date(startDate),
                lte: new Date(endDate)
            }
    }
    const perPg = perPage ? Number(perPage) : 10
    const from = Number(pageNo*perPg)-Number(perPg)
    const [count,bookings] = await prisma.$transaction([
        prisma.Booking.count({where}),
        prisma.Booking.findMany({
            skip: pageNo ? from : 0,
            take: perPg,
            orderBy: {
                createdAt: 'desc',
            },
            where,
            include: {
                customer:  {
                    select: {
                        id:true,name:true,phoneNumber:true
                    }
                },
                subAssetComponent: {
                    select: {
                        id:true,listingName:true,type:true,reservationCategory:true
                    }
                },
                table: {
                    select: {
                        id:true,capacity:true,type:true,size:true
                    }
                },
                seatBed: {
                    select: {
                        id:true,type:true,roomNo:true
                    }
                }
            }
        })
      ]);

   return res.status(200).send({
        pagination: {
            total: Math.ceil(count / perPg)
        },
        data: bookings
    });
})
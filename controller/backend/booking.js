const asyncHandler = require("express-async-handler");
const prisma = require("../../db/prisma");
const userService = require("../../services/userService")
const ownerService = require("../../services/ownerService")
const helper = require("../../helper/helper");

exports.create_booking = asyncHandler(async (req, res) => {
    try {
        const data = await req.body;
        const chkBooking = await prisma.booking.findFirst({
            where: {
                subAssetCompId: data.subAssetCompId,
                tableId: data.tableId,
                startDate: new Date(data.startDate),
                slot: data.slot
            }
        });
        if (chkBooking) {
            res.status(400).send({ message: 'This Slot Already Booked!' });
        }
        let createdUser = await userService.get_user({ phoneNumber: data.user?.phoneNumber })
        if (!createdUser) {
            const demoMail = 'user' + Math.floor(Math.random() * 10000) + '@gmail.com';
            createdUser = await prisma.user.create({
                data: {
                    email: demoMail,
                    firstName: data.user?.firstName,
                    lastName: data.user?.lastName,
                    name: data.user?.firstName + ' ' + data.user?.lastName,
                    phoneNumber: data.user?.phoneNumber,
                    status: true,
                    isVerify: false
                }
            });
        }

        const property = await prisma.SubAssetComponent.findFirst({
            where: {
                id: data.subAssetCompId
            },
            include: {
                owner: {
                    select: { id: true, phoneNumber: true }
                }
            }
        });

        const { id, name, phoneNumber } = createdUser
        const bookingData = {
            asset: { connect: { id: property.assetId } },
            subAsset: { connect: { id: property.subAssetId } },
            subAssetComponent: { connect: { id: data.subAssetCompId } },
            owner: { connect: { id: property.ownerId } },
            table: { connect: { id: data.tableId } },
            customer: { connect: { id: id } },
            customerName: name ?? data.user.lastName,
            phoneNumber: phoneNumber ?? data.user.phoneNumber,
            startDate: new Date(data.startDate),
            endDate: new Date(data.endDate),
            slot: data.slot,
            guestNumber: data.guestNumber ?? 1,
            amount: data.amount ?? 0,
            vat: data.vat ?? 0,
            discount: data.discount ?? 0,
            grandTotal: data.grandTotal ?? 0,
            status: data.status ?? "CONFIRMED"
        };
        const booking = await prisma.Booking.create({
            data: bookingData
        });
        if (booking) {
            let phone_number = "88" + phoneNumber;
            let message = "Thank you.\nYour reservation is Confirmed.";
            await helper.runSMSservice(encodeURI(message), phone_number)
            await prisma.Asset.update({
                where: { id: booking.assetId },
                data: {
                    bookingCount: {
                        increment: 1
                    }
                }
            });
        }
        res.status(200).send(booking);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

exports.get_all_booking = asyncHandler(async (req, res) => {
    const { pageNo, perPage, status, event, startDate, endDate, subAssetCompId } = await req.query;
    const dataId = await ownerService.propertyBy(req.user)
    let where = {}
    if (dataId != 'all') {
        where.ownerId = dataId
    }
    if ((req.user.userType == 'BUSINESS_MANAGER') || (req.user.userType == 'LISTING_MANAGER')) {
        where.assetId = req.user.assetId
    }
    if (status) where.status = status
    if (subAssetCompId) where.subAssetCompId = subAssetCompId
    if (event) {
        if (event == 'Regular') {
            where.bookingType = 'Regular'
        } else {
            where.bookingType = {
                not: 'Regular',
            }
        }
    }

    if (startDate && endDate) {
        where.startDate = {
            gte: new Date(startDate),
            lte: new Date(endDate)
        }
    }
    const perPg = perPage ? Number(perPage) : 10
    const from = Number(pageNo * perPg) - Number(perPg)
    const [count, bookings] = await prisma.$transaction([
        prisma.Booking.count({ where }),
        prisma.Booking.findMany({
            skip: pageNo ? from : 0,
            take: perPg,
            orderBy: {
                createdAt: 'desc',
            },
            where,
            include: {
                owner: {
                    select: {
                        id: true, name: true, phoneNumber: true
                    }
                },
                customer: {
                    select: {
                        id: true, name: true, phoneNumber: true
                    }
                },
                subAssetComponent: {
                    select: {
                        id: true, listingName: true, type: true, reservationCategory: true
                    }
                },
                table: {
                    select: {
                        id: true, capacity: true, type: true, size: true
                    }
                }
            }
        })
    ]);

    res.status(200).send({
        pagination: {
            total: Math.ceil(count / perPg)
        },
        data: bookings
    });
})
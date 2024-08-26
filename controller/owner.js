const asyncHandler = require("express-async-handler");
const prisma = require('../db/prisma');
const helper = require('../helper/helper')
const ownerService = require('../services/ownerService')

exports.create_emp_own = asyncHandler(async (req, res, next) => {
    const {name,email,confirmPassword,userType,occupation,designation,status,phoneNumber} = req.body;
    const userId = await ownerService.propertyBy(req.user);
    const hashPass = await helper.bcryptHash(confirmPassword)
    let preperData = {
        name: name,
        email: email,
        userType: userType,
        phoneNumber: phoneNumber,
        occupation: occupation,
        designation: designation,
        password: hashPass,
        status: status == 'true' ? true : false
    }
    if(userId != 'all'){
        preperData.ownerId = userId;
    }
    res.send(preperData);
    // preperData.roleId = reqData.roleId;
    const employee = await prisma.Owner.create({
        data: preperData
    });
    res.send(employee);
});

exports.emp_list = asyncHandler(async (req, res, next) => {
    const {pageNo,perPage,vendor } = req.query
    // const dataId = await ownerService.propertyBy(req.user)
    let where = {}
    // if(dataId != 'all'){
        // where.ownerId = dataId
    // }
    if(vendor == 'yes'){
        where.userType = 'BUSINESS_OWNER'
    }else{
        where.userType = {
            notIn: ['BUSINESS_OWNER','CRM_EDITOR'],
        }
    }
    const perPg = perPage ? Number(perPage) : 10
    const from = Number(pageNo*perPg)-Number(perPg)
    const [count,employee] = await prisma.$transaction([
        prisma.Owner.count({
            where
        }),
        prisma.Owner.findMany({
            skip: pageNo ? from : 0,
            take: perPg,
            where,
            include:{
                roles:{
                    include: {
                        asset: { select: { id: true, propertyName: true } }
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
      ]);
    
      res.send({
        pagination: {
          total: Math.ceil(count / perPg)
        },
        data: employee
      });
});

exports.emp_get = asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    try {
        const employee = await prisma.Owner.findUnique({
            where: {
                id:id
            }
        })
        res.status(200).send(employee);  
    } catch (error) {
        res.status(400).send(error);
    }
});

exports.emp_update = asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    try {
    const {name,email,phoneNumber} = req.body;
    const employee = await prisma.Owner.update({
        where:{
            id: id,
        },
        data:{
            name: name,
            email: email,
            isVerify: true,
            phoneNumber: phoneNumber
          }
    });
    res.status(200).send(employee);
} catch (error) {
    res.status(400).send(error);
}
});

exports.delete_emp = asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    try {
    const employee = await prisma.Owner.delete({
        where:{
            id: id
        }
    });
    res.status(200).send(employee);
} catch (error) {
    res.status(400).send(error);
}
});
const asyncHandler = require("express-async-handler");
const userService = require("../../services/userService")
const authService = require("../../services/auth")

exports.otp_login = asyncHandler(async (req, res) => {
    const { password, platform, isOtpVerify } = await req.body
    if (platform == 'apps') {
        const pathname = await req.query;
        const userData = await userService.find_or_createUser(req.body);
        if (pathname.for == "request-otp") {
            if (!userData) {
                return res.status(400).send({ error: 'Incorrect login', status: 400 });
            }
            const setOtp = await userService.sendOtp(userData);
            if (setOtp) {
                return res.status(200).send({ message: `Your verification code is :${setOtp.otp}` });
            }
            return res.status(400).send({ error: 'Something went wrong!', status: 400 });
        }
        if (pathname.for == "submit-otp") {
            if (isOtpVerify == true) {
                const currentTime = new Date();
                if (password != userData.otp) {
                    return res.status(400).send({ error: 'Incorrect OTP', status: 400 });
                }
                if (currentTime > userData.otpExpireAt) {
                    return res.status(400).send({ error: 'OTP timeout', status: 400 });
                }
                const updateUser = await userService.userUpdate(req.body, userData.id)
                return res.status(201).send({ moreInfo: userData.isVerify === false ? true : false, user: updateUser });
            } else {
                const updateUser = await userService.userUpdate(req.body, userData.id)
                return res.status(200).send(updateUser);
            }
        }
        if (pathname.for == 'guest') {
            const updateUser = await userUpdate(userData, userData.id)
            return res.status(200).send(updateUser);
        }
    }
})
exports.user_logout = asyncHandler(async(req, res) => {
    try {
        const info = await req.user;
        if(info.email == 'user@guest.com'){
            return res.status(200).send({status:true, message: 'Logout Successful'});
        }
        await userService.clearSession(info);
        return res.status(200).send({status:true, message: 'Logout Successful'});
    } catch (error) {
        return res.status(400).send({status: false, error: error });
    }
})
exports.auth_me = asyncHandler(async(req,res) => {
   const info = await authService.userByToken(req.headers.authorization)
   const user = await userService.get_user({id:info.id})
   if(user){
        return res.status(200).send(user);
   }
    return res.status(401).send({status:false, message: 'Invalid User' });
})

exports.update_me = asyncHandler(async(req,res) => {
    const id = parseInt(req.params.id, 10);
    const data = await req.body
    const user = await userService.updateUserInfo(data,id)
    return res.status(200).send(user);
})

exports.terms_condition = asyncHandler(async(req,res) => {
    const terms = await userService.appsTerms()
    return res.status(200).send(terms);
  })

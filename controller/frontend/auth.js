const asyncHandler = require("express-async-handler");
const userService = require("../../services/userService")

exports.otp_login = asyncHandler(async (req, res) => {
    const { password, platform, isOtpVerify } = await req.body
    if (platform == 'apps') {
        const pathname = await req.query;
        const userData = await userService.find_or_createUser(req.body);
        if (pathname.for == "request-otp") {
            if (!userData) {
                res.status(400).send({ error: 'Incorrect login', status: 400 });
            }
            const setOtp = await userService.sendOtp(userData);
            if (setOtp) {
                res.status(200).send({ message: `Your verification code is :${setOtp.otp}` });
            }
            res.status(400).send({ error: 'Something went wrong!', status: 400 });
        }
        if (pathname.for == "submit-otp") {
            if (isOtpVerify == true) {
                const currentTime = new Date();
                if (password != userData.otp) {
                    res.status(400).send({ error: 'Incorrect OTP', status: 400 });
                }
                if (currentTime > userData.otpExpireAt) {
                    res.status(400).send({ error: 'OTP timeout', status: 400 });
                }
                const updateUser = await userService.userUpdate(req.body, userData.id)
                res.status(201).send({ moreInfo: userData.isVerify === false ? true : false, user: updateUser });
            } else {
                const updateUser = await userService.userUpdate(req.body, userData.id)
                res.status(200).send(updateUser);
            }
        }
        if (pathname.for == 'guest') {
            const updateUser = await userUpdate(userData, userData.id)
            res.status(200).send(updateUser);
        }
    }
})

const asyncHandler = require("express-async-handler");
const prisma = require("../../db/prisma");
const helper = require("../../helper/helper");
const authService = require("../../services/auth")

exports.attempt_to_login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.Owner.findUnique({
      where: {
        email: email,
      },
      include: {
        roles: true
      }
    });

    if (!user) {
      res.status(422).json({ message: "This Email is Not Found!" });
      return;
    }
    const hashChk = await helper.hashCheck(password, user.password);
    if (!hashChk) {
      res.status(422).json({ message: "Incorrect Password!" });
      return;
    }
    const permUser = await authService.permissionSetter(user)
    const token = await authService.generateUserToken({ ...permUser, ...{ platform: "DASHBOARD_USER" } })
    const tokenUser = { user, ...{ token: token } };
    res.status(200).send(tokenUser);
  } catch (error) {
    res.status(401).send(error);
  }
});

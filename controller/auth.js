const asyncHandler = require("express-async-handler");
const prisma = require("../db/prisma");
const helper = require("../helper/helper");

exports.attempt_to_login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await prisma.Owner.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    res.status(422).json({message: "This Email is Not Found!" });
    return;
  }
  const hashChk = await helper.hashCheck(password, user.password);
  if (!hashChk) {
    res.status(422).json({message: "Incorrect Password!" });
    return;
  }
  res.json(user);
});

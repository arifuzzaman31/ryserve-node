const express = require("express");
const routes = express.Router();
const userauth_controller = require("../controller/userauth");

routes.post("/auth/login", userauth_controller.otp_login);

module.exports = routes;
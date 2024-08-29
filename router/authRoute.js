const express = require("express");
const routes = express.Router();
const userauth_controller = require("../controller/frontend/auth");
const booking_controller = require("../controller/frontend/booking");
const adminMiddleware = require("../middleware/adminMiddleware");

routes.post("/auth/login", userauth_controller.otp_login);
routes.get("/me",adminMiddleware, userauth_controller.auth_me);
routes.get("/terms-condition", userauth_controller.terms_condition);
routes
    .route("/booking")
    .all(adminMiddleware)
    .get(booking_controller.booking_list)
    .post(booking_controller.create_booking);

routes
    .route("/booking/:id")
    .all(adminMiddleware)
    .get(booking_controller.get_booking)
    .put(booking_controller.update_booking)
    .delete(booking_controller.delete_booking);

module.exports = routes;
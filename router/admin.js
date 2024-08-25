const express = require('express');
const routes = express.Router();
const owner_controller = require("../controller/owner");
const auth_controller = require("../controller/auth");

routes.post("/login",auth_controller.attempt_to_login);
routes.route("/employee")
    .get(owner_controller.emp_list)
    .post(owner_controller.create_emp_own);

routes.route("/employee/:id")
    .get(owner_controller.emp_get)
    .put(owner_controller.emp_update)
    .delete(owner_controller.delete_emp);

module.exports = routes;
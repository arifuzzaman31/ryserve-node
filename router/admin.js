const express = require('express');
const routes = express.Router();
const owner_controller = require("../controller/owner");
const auth_controller = require("../controller/auth");
// const role_controller = require("../controller/role");
const adminMiddleware = require("../middleware/adminMiddleware")

routes.post("/login", auth_controller.attempt_to_login);
// routes.post("/roles", role_controller.create_role);
routes.get("/middle",adminMiddleware,async(req,res) => {
    res.send(req.user.name)
});
routes.route("/employee")
    .all(adminMiddleware)
    .get(owner_controller.emp_list)
    .post(owner_controller.create_emp_own);

routes.route("/employee/:id")
    .all(adminMiddleware)
    .get(owner_controller.emp_get)
    .put(owner_controller.emp_update)
    .delete(owner_controller.delete_emp);

module.exports = routes;
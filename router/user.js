const express = require("express");
const routes = express.Router();
const subassetcomp_controller = require("../controller/frontend/subassetcomp");

routes.get("/sub-asset-component", subassetcomp_controller.subassetcomp_list);
routes.get("/sub-asset-component/:id", subassetcomp_controller.get_subassetcomp);

module.exports = routes;

const express = require('express');
const routes = express.Router();
const owner_controller = require("../controller/owner");
const auth_controller = require("../controller/auth");
const business_controller = require("../controller/business");
const asset_controller = require("../controller/asset");
const amenity_controller = require("../controller/amenities");
const subasset_controller = require("../controller/subasset");
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

routes.route("/business")
    .all(adminMiddleware)
    .get(business_controller.business_list)
    .post(business_controller.create_business);
    
routes.route("/business/:id")
    .all(adminMiddleware)
    .get(business_controller.business_get)
    .put(business_controller.business_update)
    .delete(business_controller.delete_business);

routes.route("/asset")
    .all(adminMiddleware)
    .get(asset_controller.asset_list)
    .post(asset_controller.create_asset);
    
routes.route("/asset/:id")
    .all(adminMiddleware)
    .get(asset_controller.asset_get)
    .put(asset_controller.asset_update)
    .delete(asset_controller.delete_asset);

routes.route("/amenities")
    .all(adminMiddleware)
    .get(amenity_controller.amenity_list)
    .post(amenity_controller.create_amenity);
routes.route("/amenities/:id")
    .all(adminMiddleware)
    .get(amenity_controller.get_amenity)
    .put(amenity_controller.update_amenity)
    .delete(amenity_controller.delete_amenity);

routes.route("/sub-asset")
    .all(adminMiddleware)
    .get(subasset_controller.subasset_list)
    .post(subasset_controller.create_subasset);

routes.route("/sub-asset/:id")
    .all(adminMiddleware)
    .get(subasset_controller.get_subasset)
    .put(subasset_controller.subasset_update)
    .delete(subasset_controller.delete_subasset);

module.exports = routes;
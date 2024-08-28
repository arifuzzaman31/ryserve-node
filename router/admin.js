const express = require("express");
const routes = express.Router();
const owner_controller = require("../controller/owner");
const auth_controller = require("../controller/auth");
const business_controller = require("../controller/business");
const asset_controller = require("../controller/asset");
const amenity_controller = require("../controller/amenities");
const cuisine_controller = require("../controller/cuisine");
const subasset_controller = require("../controller/subasset");
const subassetcomp_controller = require("../controller/subassetcomp");
const table_controller = require("../controller/table");
const role_controller = require("../controller/role");
const booking_controller = require("../controller/booking");
const adminMiddleware = require("../middleware/adminMiddleware");

routes.post("/login", auth_controller.attempt_to_login);
routes.get("/middle", adminMiddleware, async (req, res) => {
  res.send(req.user.name);
});
routes
  .route("/employee")
  .all(adminMiddleware)
  .get(owner_controller.emp_list)
  .post(owner_controller.create_emp_own);

routes
  .route("/employee/:id")
  .all(adminMiddleware)
  .get(owner_controller.emp_get)
  .put(owner_controller.emp_update)
  .delete(owner_controller.delete_emp);

routes
  .route("/business")
  .all(adminMiddleware)
  .get(business_controller.business_list)
  .post(business_controller.create_business);

routes
  .route("/business/:id")
  .all(adminMiddleware)
  .get(business_controller.business_get)
  .put(business_controller.business_update)
  .delete(business_controller.delete_business);

routes
  .route("/asset")
  .all(adminMiddleware)
  .get(asset_controller.asset_list)
  .post(asset_controller.create_asset);

routes
  .route("/asset/:id")
  .all(adminMiddleware)
  .get(asset_controller.asset_get)
  .put(asset_controller.asset_update)
  .delete(asset_controller.delete_asset);

routes
  .route("/amenities")
  .all(adminMiddleware)
  .get(amenity_controller.amenity_list)
  .post(amenity_controller.create_amenity);
routes
  .route("/amenities/:id")
  .all(adminMiddleware)
  .get(amenity_controller.get_amenity)
  .put(amenity_controller.update_amenity)
  .delete(amenity_controller.delete_amenity);

routes
  .route("/cuisine")
  .all(adminMiddleware)
  .get(cuisine_controller.cuisine_list)
  .post(cuisine_controller.create_cuisine);
routes
  .route("/cuisine/:id")
  .all(adminMiddleware)
  .get(cuisine_controller.get_cuisine)
  .put(cuisine_controller.update_cuisine)
  .delete(cuisine_controller.delete_cuisine);

routes
  .route("/sub-asset")
  .all(adminMiddleware)
  .get(subasset_controller.subasset_list)
  .post(subasset_controller.create_subasset);

routes
  .route("/sub-asset/:id")
  .all(adminMiddleware)
  .get(subasset_controller.get_subasset)
  .put(subasset_controller.subasset_update)
  .delete(subasset_controller.delete_subasset);

routes
  .route("/sub-asset-component")
  .all(adminMiddleware)
  .get(subassetcomp_controller.subassetcomp_list)
  .post(subassetcomp_controller.create_subassetcomp);

routes
  .route("/sub-asset-component/:id")
  .all(adminMiddleware)
  .get(subassetcomp_controller.get_subassetcomp)
  .put(subassetcomp_controller.subassetcomp_update)
  .delete(subassetcomp_controller.delete_subassetcomp);

routes
  .route("/table")
  .all(adminMiddleware)
  .get(table_controller.table_list)
  .post(table_controller.create_table);

routes
  .route("/table/:id")
  .all(adminMiddleware)
  .get(table_controller.get_table)
  .put(table_controller.table_update)
  .delete(table_controller.delete_table);

routes
  .route("/role-permission")
  .all(adminMiddleware)
  .get(role_controller.role_list)
  .post(role_controller.create_role);

routes
  .route("/role-permission/:id")
  .all(adminMiddleware)
  .get(role_controller.get_role)
  .put(role_controller.update_role)
  .delete(role_controller.delete_role);

module.exports = routes;

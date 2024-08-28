const express = require("express");
const routes = express.Router();
const subassetcomp_controller = require("../controller/frontend/subassetcomp");
const wishlist_controller = require("../controller/frontend/wishList");

routes.get("/sub-asset-component", subassetcomp_controller.subassetcomp_list);
routes.get("/sub-asset-component/:id", subassetcomp_controller.get_subassetcomp);

routes.route("/wishlist")
    .post(wishlist_controller.add_to_wishList)
    .get(wishlist_controller.get_all_wishList)
    .delete(wishlist_controller.destroy_wishList);

module.exports = routes;

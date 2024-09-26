const express = require("express");
const routes = express.Router();
const subassetcomp_controller = require("../controller/frontend/subassetcomp");
const cuisine_controller = require("../controller/backend/cuisine");

routes.get("/sub-asset-component", subassetcomp_controller.subassetcomp_list);
routes.get("/sub-asset-component/:id", subassetcomp_controller.get_subassetcomp);
routes.get("/cuisine", cuisine_controller.cuisine_list);
routes.post("/check-cd", async(req,res) => {
    const userData = await req.body
    const fields = ['firstName','lastName','email','birthDate','phoneNumber','residenceAddress','status','otp','isVerify','otpExpireAt']
      const info = {}
    //   const comm = Object.keys(userData)
      
    //       comm.map(element => {
    //         let el = element
    //         info.push({el:userData.el})
    //       });
      
      return res.status(200).send(fields);
    //    const dt = fields.map(itm => {
        // if(userData.includes(itm)){
        //   info.itm = Object.values(userData.itm)
        // }
    //     return info.itm = Object.values(userData.itm)
    //   })
});

module.exports = routes;

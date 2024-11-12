const express = require("express");
const routes = express.Router();
const subassetcomp_controller = require("../controller/frontend/subassetcomp");
const cuisine_controller = require("../controller/backend/cuisine");
const https = require('https');
const axios = require('axios');

routes.get("/sub-asset-component", subassetcomp_controller.subassetcomp_list);
routes.get("/sub-asset-component/:id", subassetcomp_controller.get_subassetcomp);
routes.get("/cuisine", cuisine_controller.cuisine_list);
routes.get("/check-cd", async(req,res) => {
      return res.status(200).send("Hello Bello");
});
routes.post("/slic-token", async(req,res) => {
      try {
            const httpsAgent = new https.Agent({
              rejectUnauthorized: false,
            });
        
            const resp = await axios.post(
              "http://120.50.12.81:8501/token",
              {
                "ApiKey": "$2b$12$rg.troP82UZf9a4xH3PBBOHWvKKzAOhrCyy4i29df4HDquDGe7nzK",
                "UserName": "WebAble"
              },
              {
                httpsAgent,
              }
            );
            return res.status(200).send(resp.data);
          } catch (error) {
            console.error('Error making request:', error);
            return res.status(500).send({ error: 'Failed to make request' });
          }
});

module.exports = routes;

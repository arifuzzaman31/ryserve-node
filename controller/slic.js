const asyncHandler = require("express-async-handler");
const https = require('https');
const axios = require('axios');

exports.slic_token = asyncHandler(async (req, res) => {
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

exports.prem_cal = asyncHandler(async (req, res) => {
    const param = await req.body;
    const apiUrl = `http://120.50.12.81:8501/prem_calculator?product_cd=${param.productCD}&term=${param.terms}&sum_assured=${param.sumAssure}&pay_mode=${param.paymentModeCode}&age=${param.age}`;
    try {
        const httpsAgent = new https.Agent({
          rejectUnauthorized: false,
        });
    
        const resp = await axios.get(
            apiUrl,
          {
            headers: {
              Authorization: `Bearer ${param.token}`,
              "Content-Type": "application/json",
            }
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

exports.policy_info = asyncHandler(async (req, res) => {
    const param = await req.body;
    const apiUrl = `http://120.50.12.81:8501/policy_info?policy_no=${param.policyNo}`;
    try {
        const httpsAgent = new https.Agent({
          rejectUnauthorized: false,
        });
    
        const resp = await axios.get(
            apiUrl,
          {
            headers: {
              Authorization: `Bearer ${param.token}`,
              "Content-Type": "application/json",
            }
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

exports.agent_info = asyncHandler(async (req, res) => {
    const param = await req.body;
    const apiUrl = `http://120.50.12.81:8501/agent_info?fa_id=${param.faId}`;
    try {
        const httpsAgent = new https.Agent({
          rejectUnauthorized: false,
        });
    
        const resp = await axios.get(
            apiUrl,
          {
            headers: {
              Authorization: `Bearer ${param.token}`,
              "Content-Type": "application/json",
            }
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

exports.agent_dues = asyncHandler(async (req, res) => {
    const param = await req.body;
    const apiUrl = `http://120.50.12.81:8501/agent_dues?fa_id=${param.faId}`;
    try {
        const httpsAgent = new https.Agent({
          rejectUnauthorized: false,
        });
    
        const resp = await axios.get(
            apiUrl,
          {
            headers: {
              Authorization: `Bearer ${param.token}`,
              "Content-Type": "application/json",
            }
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

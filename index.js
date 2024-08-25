const express = require('express');
const dotenv = require('dotenv');
const adminRoute = require('./router/admin');
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use('/api/backend', adminRoute);

app.listen(port,() => {
    console.log(`apps running on ${port}`);
})
const express = require('express');
const dotenv = require('dotenv');
const adminRoute = require('./router/admin');
const authRoute = require('./router/authRoute');
const userRoute = require('./router/user');
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use('/api/backend', adminRoute);
app.use('/api', [authRoute, userRoute]);

app.get("/info",async(req,res) => {
    res.status(200).send('running on')
    return ;
});

app.listen(port,() => {
    console.log(`reserve running on ${port}`);
})
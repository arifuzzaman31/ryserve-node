const express = require('express');
const dotenv = require('dotenv');
const adminRoute = require('./router/admin');
const authRoute = require('./router/authRoute');
const userRoute = require('./router/user');
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PATCH, PUT, DELETE");
    next();
})
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
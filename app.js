const express = require('express')
const Port = process.env.PORT || 6000;
const app = express();
const mongoose = require('./db/db')
const userRouter = require('../backend/routes/user')
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/', userRouter)
app.listen(Port, () => {
    console.log(Port, 'port runing')
})
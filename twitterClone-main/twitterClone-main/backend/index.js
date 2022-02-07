const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const userRouter = require('./router/user');

const app = express();

app.use(express.json());
app.use(userRouter);
app.get('/',(req,res)=>{
    res.send('Hello world from twitter clone')
})

module.exports = app;
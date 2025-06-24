const express = require('express')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const cookie_parser = require('cookie-parser')
const session = require('express-session')
const route = require('./routes/Authroutes')

const app = express()
const PORT = 4000 
dotEnv.config()



mongoose.connect(process.env.mongoo_uri)
.then(()=>{
    console.log("MongooDB connected Successfully!")
}).catch((error)=>{
    console.log(error.message);
})


app.use('/auth',route);



app.listen(PORT,()=>{
    console.log("Server is running at port 4000!");
})
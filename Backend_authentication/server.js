const express = require('express')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const route = require('./routes/Authroutes')
const cors = require('cors')


const app = express()
const PORT = 4000
app.use(express.json())
app.use(cookieParser()) 
dotEnv.config()
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))


mongoose.connect(process.env.mongoo_uri)
.then(()=>{
    console.log("MongooDB connected Successfully!")
}).catch((error)=>{
    console.log(error.message);
})


app.use(session({
    name:"connect.sid",
    secret:process.env.secret_key,
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        maxAge: 1000 * 60 * 60 * 24,
        secure:false
    }
}
))

app.use('/auth',route);




app.listen(PORT,()=>{
    console.log("Server is running at port 4000!");
})
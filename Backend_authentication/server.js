const express = require('express')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const route = require('./routes/Authroutes')
const router = require('./routes/CRM_routes')
const cors = require('cors')


const app = express()
const PORT = 4000
app.use(express.json())
app.use(cookieParser()) 
dotEnv.config()
app.use(cors({
    origin:['http://localhost:5173','http://localhost:5174'],
    credentials:true
}))


mongoose.connect(process.env.mongoo_uri_1)
.then(()=>{
    console.log("authentication MongooDB connected Successfully!")
}).catch((error)=>{
    console.log(error.message);
})

const crmdbConnection = mongoose.createConnection(process.env.mongo_uri_crm_db)

crmdbConnection.on('connected',()=>{
    console.log("CRM Mongodb connected Successfully!");
})
crmdbConnection.on('error',(err)=>{
    console.log('CRM DB error:',err.message)
});


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
app.use('/api',router)


app.listen(PORT,()=>{
    console.log("Server is running at port 4000!");
})
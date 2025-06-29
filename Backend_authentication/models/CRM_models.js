const mongoose = require('mongoose')

const createEmployee = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('CRM_models',createEmployee);


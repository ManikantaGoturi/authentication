const mogoose = require('mongoose');

const userSchema = new mogoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mogoose.model("Authmodel",userSchema);

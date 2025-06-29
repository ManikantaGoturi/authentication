const bcrypt = require('bcryptjs');
const Authmodel = require('../models/Authmodel')

exports.register = async(req,res)=>{
    const {username,password,email,phone} = req.body;
    const hashed = await bcrypt.hash(password,10)
    const user = new Authmodel({
        username,password:hashed,email,phone
    })
    await user.save();
    res.json({"message":"user registered!"})
    
}

exports.login = async(req,res) =>{
    const {username,password} = req.body;
    const user = await Authmodel.findOne({username})
    if(!user){
        return res.status(401).json({"message":"invaild credientials!"})
    }
    const vaild = await bcrypt.compare(password,user.password)
    if(!vaild){
        return res.status(401).json({"message":"invaild credientails!"})
    }
    req.session.userId = user._id
    res.json({"message":"Login successfull!"})
    
}

exports.logout = (req,res) =>{
    req.session.destroy((error)=>{
        if(error){
            return res.status(500).json({"message":"Error in Logout!!"});
        }
        res.clearCookie("connect.sid");
        res.json({"message":"loged out successfully!"})
    })
}

const bcrypt = require('bcryptjs');
const Authmodel = require('../models/Authmodel')

exports.register = async(req,res)=>{
    const {username,password} = req.body;
    const hashed = await bcrypt.hash(password,10)
    const user = new Authmodel({
        username,password:hashed
    })
    await user.save();
    res.json({"message":"user registered!"})
}

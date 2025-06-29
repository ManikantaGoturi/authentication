const EmployeeSchema = require('../models/CRM_models')

exports.createEmployeeDetails = async(req,res) =>{
    try{
        const employeeDetails = await EmployeeSchema.create(req.body)
        res.status(200).json(employeeDetails)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: "Failed to create employee", error: err.message });
    }
}

exports.getallEmployeeDetails = async(req,res) =>{
    try{
        const getallEmp = await EmployeeSchema.find();
        res.status(200).json(getallEmp);
    }catch(err){
        console.log(err)
    }
}

exports.getSingleEmployeeDetails = async(req,res) =>{
    try{
        const singleEmployeeDetails = await EmployeeSchema.findById(req.params.id);
        if(!singleEmployeeDetails){
           return res.status(404).json({"message":"Employee not found"})
        }
        res.status(200).json(singleEmployeeDetails);
    }catch(err){
        console.log(err)
    }
}

exports.updateSingleEmployeeDetails = async(req,res)=>{
    try{
        const updateEmployeeDetails = await EmployeeSchema.findByIdAndUpdate(req.params.id.trim(),req.body,{ new: true })
        if(!updateEmployeeDetails){
            res.status(404).json({"message":"Employee not updated"})
        }
        res.status(200).json(updateEmployeeDetails);
    }catch(err){
        console.log(err)
    }
}

exports.deleteSingleEmployeeDetails = async(req,res)=>{
    try{
        const deleteEmployeeDetails = await EmployeeSchema.findByIdAndDelete(req.params.id.trim())
        if (!deleteEmployeeDetails) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({message:"Employee deleted",data:deleteEmployeeDetails});
    }catch(err){
        console.log(err);
    }
}






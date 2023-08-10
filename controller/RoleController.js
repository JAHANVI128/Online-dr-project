const RoleModel = require("../model/RoleModel")

//addRole
module.exports.addRole = function(req,res)
{
    let role = new RoleModel({
        "RoleName":req.body.RoleName
    })
    role.save().then((data)=>{
        res.status(200).json({
            msg:"Role Added Successfully",
            "data":data
    })
    }).catch((err)=>{
        res.status(-9).json({
            msg:"Role Not Added",
            "err":err
        })
    })
}

//deleteRole
module.exports.deleteRole = function(req,res)
{
    let roleId = req.params.roleId
    RoleModel.findByIdAndDelete(roleId).then((data)=>{
        res.status(200).json({
            msg:"Role deleted Successfully",
            data:data
        })
    }).catch((err)=>{
        res.status(-9).json({
            msg:"Role deletion failed",
            err:err
        })
    })
} 

//getAllRole
module.exports.getAllRole = function(req,res)
{
    RoleModel.find().then((data)=>{
        res.status(200).json({
            "msg":"All Role Retrieved",
            "data":data
        })
    }).catch((err)=>{
        res.status(-9).json({
            "msg":"Role Retrieval failed",
            "err":err
        })
    })
}
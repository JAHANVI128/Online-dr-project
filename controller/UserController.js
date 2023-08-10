const UserModel = require("../model/UserModel")

//addUser
module.exports.addUser = function(req,res)
{
    let user = new UserModel({
        "Email":req.body.Email,
        "Password":req.body.Password.Email,
        "FirstName":req.body.FirstName,
        "LastName":req.body.LastName,
        "Status":req.body.Status
    })
    user.save().then((data)=>{
        res.status(200).json({
            "msg":"User Successfully added",
            "data":data
        })
    }).catch((err)=>{
        res.status(-9).json({
            "msg":"User not added",
            "err":err
        })
    })
}


//deleteUserById
module.exports.deleteUserById = function(req,res)
{
    UserModel.findByIdAndDelete(req.params.userId).then((data)=>{
        res.status(200).json({
            "msg":"User deleted Successfully..!",
            "data":data
        })
    }).catch((err)=>{
        res.status(-9).json({
            "msg":"User deletion failed..",
            err:err
        })
    })
}

//getAllUser
module.exports.getAllUser = function(req,res)
{
    UserModel.find().then((data)=>{
        res.status(200).json({
            "msg":"All User Retrieved",
            "data":data
        })
    }).catch((err)=>{
        res.status(-9).json({
            "msg":"User Retrieval failed",
            "err":err
        })
    })
}
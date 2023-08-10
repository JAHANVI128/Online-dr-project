const DoctorModel = require("../model/DoctorModel")

//addDoctor
module.exports.addDoctor = function(req,res)
{
    let doctor = new DoctorModel({
        "Name":req.body.doctorName,
        "Email":req.body.doctorEmail,
        "Password":req.body.doctorPassword

        // "Qualification":req.body.Qualification,
        // "Specialization":req.body.Specialization,
        // "Experience":req.body.Experience,
        // "About":req.body.About,
        // "Registraion":req.body.Registraion 
        //ProfilePic
    })
    doctor.save().then((data)=>{
        res.status(200).json({
            msg:"Doctor added Successfully",
            data:data
        })
    }).catch((err)=>{
        res.status(-9).json({
            msg:"Doctor not added",
            err:err
        })
    })
}

//getAllDoctor
module.exports.getAllDoctor = function(req,res)
{
    DoctorModel.find().then((data)=>{
        res.status(200).json({
            "msg":"All Doctors Retrieved",
            data:data
        })
    }).catch((err)=>{
        res.status(-9).json({
            "msg":"Doctor retrieval Failed",
            err:err
        })
    })
}

//deleteDoctorById
module.exports.deleteDoctorById = function(req,res)
{
    DoctorModel.findByIdAndDelete(req.params.doctorId).then((data)=>{
        res.status(200).json({
            "msg":"Doctor deleted Successfully..!",
            "data":data
        })
    }).catch((err)=>{
        res.status(-9).json({
            "msg":"Doctor deletion failed..",
            err:err
        })
    })
}

//loginDoctor
module.exports.loginDoctor = async function(req,res){
    let email = req.body.email
    let password = req.body.password
    console.log(req.body)
    console.log(email)
    let doctor = await DoctorModel.findOne({Email:email})
    console.log(doctor);
    
    if(doctor && doctor.Password==password)
    { 
            // let token = jwt.sign({"email":user.email,"userId":user._id,"role":"user"},SEC_KEY,{expiresIn:"7d"})
            res.json({"msg":"Login Successfully","data":doctor,rescode:200})
    }
    else
    {
        res.json({"msg":"Login Failed","data":"User Not Available",rescode:-9})
    }
}
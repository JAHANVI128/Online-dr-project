const mongoose = require("mongoose")

var doctorSchema = mongoose.Schema({

    "Name":{
        type:String
    },
    "Email":{
        type:String
    },
    "Password":{
        type:String
    }
    
    // "Qualification":{
    //     type:String
    // },
    // "Specialization":{
    //     type:String
    // },
    // "Experience":{
    //     type:Number
    // },
    // "About":{
    //     type:String
    // },
    // "Registration":{
    //     type:String
    // },
    // "ProfilePic":{

    // },
    // "UserId":{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User"
    // }
})

module.exports = mongoose.model("Doctor",doctorSchema)
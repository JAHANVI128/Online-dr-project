const mongoose = require("mongoose")

var userSchema = mongoose.Schema({
    "FirstName":{
        type:String
    },
    "LastName":{
        type:String
    },
    "Email":{
        type:String,
        // requied:true
    },
    "Password":{
        type:String,
        // required:true
    },
    "Gender":{
        type:String
    },
    "Status":{
        type:Boolean
    }
    // "role":{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Role"
    // }

})

module.exports = mongoose.model("User",userSchema)
const mongoose = require("mongoose")

var roleSchema = new mongoose.Schema({
    "RoleName":{
        type:String
    },
    // "roleDescription":{
    //     type:String
    // }
})

module.exports = mongoose.model("Role",roleSchema)
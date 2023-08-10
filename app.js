const express = require("express")
const mongoose = require("mongoose")
const app = express()
const UserRoutes = require("./app/src/routes/UserRoutes")
const DoctorRoutes = require("./app/src/routes/DoctorRoutes")
const RoleRoutes = require("./app/src/routes/RoleRoutes")
const cors = require("cors")
// require("./app/src/config/dbConfig").getDbConnection()


MONGO_URI = "mongodb://127.0.0.1:27017/online-dr"
mongoose.connect(MONGO_URI).then(()=>console.log("Db Connected "))
.catch(()=>console.log("Db Connection failed"))


//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//User
app.use("/user",UserRoutes)

//Doctor
app.use("/doctor",DoctorRoutes)

//role
app.use("/role",RoleRoutes)

app.listen(9999,function(){
    console.log("Server Started at 9999")
})
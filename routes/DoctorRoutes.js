const DoctorController = require("../controller/DoctorController")
const express = require("express")
const router = express.Router()

router.post("/addDoctor",DoctorController.addDoctor)
router.get("/getAllDoctor",DoctorController.getAllDoctor)
router.delete("/deleteDoctorById/:doctorId",DoctorController.deleteDoctorById)
router.post("/loginDoctor",DoctorController.loginDoctor)


module.exports = router
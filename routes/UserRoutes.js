const UserController = require("../controller/UserController")
const express = require("express")
const router = express.Router()

router.post("/addUser",UserController.addUser)
router.get("/getAllUser",UserController.getAllUser)
router.delete("/deleteUserById/:userId",UserController.deleteUserById)

module.exports = router
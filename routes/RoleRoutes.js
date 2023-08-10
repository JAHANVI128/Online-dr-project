const RoleController = require("../controller/RoleController")
const express = require("express")
const router = express.Router()

router.post("/addRole",RoleController.addRole)
router.get("/getAllRole",RoleController.getAllRole)
router.delete("/deleteRoleById/:roleId",RoleController.deleteRole)

module.exports = router
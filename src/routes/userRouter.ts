//@ts-ignore
const express = require("express");
//@ts-ignore
const router = express.Router();

const usersController = require("./../controllers/usersController");
const isSuperAdmin = require("../middleware/isSuperAdmin");
const authorize = require("./../middleware/authorize");

router.get("/userProfile", authorize, usersController.getUserProfile);
router.get("/roles", usersController.getRole);
router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.put("/add/admin", isSuperAdmin, usersController.editRoleToAdmin);

module.exports = router;

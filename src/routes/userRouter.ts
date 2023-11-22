//@ts-ignore
const express = require("express");
//@ts-ignore
const router = express.Router();

const usersController = require("./../controllers/usersController");

router.post("/register", usersController.register);
router.post("/login");

module.exports = router;

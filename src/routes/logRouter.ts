//@ts-ignore
const express = require("express");
//@ts-ignore
const router = express.Router();
const logController = require("./../controllers/logsController");

router.get("/", logController.get);

module.exports = router;

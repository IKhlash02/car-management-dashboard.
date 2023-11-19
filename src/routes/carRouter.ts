const express = require("express");
const router = express.Router();
const carController = require("./../controllers/carsController");
const upload = require("./../middleware/upload");

router.get("/", carController.get);
router.post("/create", upload.single("image_url"), carController.post);
router.get("/:id", carController.getById);
router.put("/:id", carController.updateById);
router.delete("/:id", carController.deleteById);

module.exports = router;

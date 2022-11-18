const express = require("express");
const router = express.Router();
const controller = require("../controllers/main.controller");

router.post("/add", controller.postQuestion);

router.get("/", controller.index);
router.get("/add", controller.addQuestion);

module.exports = router;

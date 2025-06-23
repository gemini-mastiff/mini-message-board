const express = require("express");
const controller = require("../controllers/controller.js");
const router = express.Router();

router.get("/", controller.getMessages);
router.get("/new", controller.getNewMessage);
router.post("/new", controller.postNewMessage);
router.get("/message/:messageId", controller.getMessageDetails);

module.exports = router;

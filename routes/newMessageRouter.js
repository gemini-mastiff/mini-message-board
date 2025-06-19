const express = require("express");
const newMessageRouter = express.Router();

newMessageRouter.get("/", (req, res) => res.send("New Messages"));

module.exports = newMessageRouter;

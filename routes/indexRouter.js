const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => res.send("Index Page"));

module.exports = indexRouter;

require("dotenv").config();
const express = require("express");
const path = require("node:path");
const app = express();
const router = require("./routes/router.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});

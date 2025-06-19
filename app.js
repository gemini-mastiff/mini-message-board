const express = require("express");
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const router = require("./routes/router.js");

app.use("/", router);

const PORT = 8000;
app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});

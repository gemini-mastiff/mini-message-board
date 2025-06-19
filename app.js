const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter.js");
const newMessageRouter = require("./routes/newMessageRouter.js");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

const PORT = 8000;
app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});

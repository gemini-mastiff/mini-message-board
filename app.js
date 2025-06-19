const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter.js");

app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 8000;
app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});

const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.header("Content-Type", "application/json");
  res.status(404).json({
    hello: "HI",
  });
});

app.listen(3000, () => {
  console.log("started server");
});

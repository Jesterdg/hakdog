const express = require("express");
const app = express();
app.listen(3000, () => console.lofg("Server running"));
app.get("/", (req, res) => {
  res.send("hostingsss");
});

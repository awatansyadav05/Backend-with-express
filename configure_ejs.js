const express = require("express");
const app = express();
app.set("view engines", "ejs");

app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.get("/contact", function (req, res) {
  res.render("contact.ejs", { name: "avii_don" });
});
app.listen(5500);

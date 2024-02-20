const express = require("express");
const app = express();
app.set("view engines", "ejs");
app.use(express.static('./public'));

app.get("/error", function (req, res,  next) {
  res.render("error.ejs");
});

app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.get("/contact", function (req, res) {
  res.render("contact.ejs", { name: "avii_don" });
});
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})
app.listen(5500);

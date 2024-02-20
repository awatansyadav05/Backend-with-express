const express = require("express");
const app = express();
app.use(function (req, res, next) {
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World");
  const express = require("express");
  const app = express();

  app.use(function (req, res, next) {
    console.log("middleware working");

    next();
  });

  app.get("/", function (req, res) {
    res.send("Hello World");
  });
  app.get("/profile", function (req, res) {
    res.send("Hello from deadman");
  });
  app.get("/profile/:username", function (req, res) {
    res.send(`hwwlo from ${req.params.username}`);
  });
  app.get("/contact", function (req, res) {
    res.send("location hell ");
  });

  app.listen(3000);
});
app.get("/profile", function (req, res) {
  res.send("Hello from deadman");
});
app.get("/contact", function (req, res) {
  res.send("location hell ");
});
app.listen(3000);

// routes/new.js
var express = require("express");
var router = express.Router();
const { messages } = require("../public/javascripts/data");

/* GET form page. */
router.get("/", function (req, res, next) {
  res.render("form", { title: "Mini Messageboard" });
});

/* POST new message */
router.post("/", function (req, res, next) {
  const { message, author } = req.body;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;

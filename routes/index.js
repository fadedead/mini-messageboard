// routes/index.js

var express = require("express");
const { messages } = require("../public/javascripts/data");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;

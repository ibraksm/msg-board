const express = require("express");
const router = express.Router();

const messages = require("../data/messages");

router.get("/", (req, res) => {
  res.render("index", {messages: messages});
});

module.exports = router;
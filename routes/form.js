const express = require("express");
const router = express.Router();
const messages = require("../data/messages");
const messageController = require("../controllers/message");

const renderForm = (res, options = {}) => {
  res.render("form", options);
}

router.get("/", (req, res) => {
  renderForm(res)
});

router.post("/", (req, res) => {
  const {user, text} = req.body;
  
  messageController.push({ text: text, user: user });
    
  console.log(`User "${user}" send the text : ${text}`);

  renderForm(res);
});

module.exports = router;
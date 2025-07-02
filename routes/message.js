const express = require("express");
const router = express.Router();

const messageController = require("../controllers/message");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const message = messageController.getMessageById(id);

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("details", { message });
});

module.exports = router;
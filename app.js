const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const indexRoute = require("./routes/index");
const newMessagesRoute = require("./routes/form");
const messageRoute = require("./routes/message")

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRoute);
app.use("/new", newMessagesRoute);
app.use("/message", messageRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
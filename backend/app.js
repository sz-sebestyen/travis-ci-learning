const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const Message = require("./models/Message");

app.get("/", async (req, res, next) => {
  await new Message({ text: "hello" }).save();

  const message = await Message.findOne({ text: "hello" });

  res.json(message);
});

module.exports = app;

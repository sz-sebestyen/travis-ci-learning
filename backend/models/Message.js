const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: { type: String },
});

module.exports = mongoose.model("message", MessageSchema);

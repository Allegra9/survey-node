const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema; //because it's nested inside a Survey schema
//mongoose.model("recipients", recipientSchema);

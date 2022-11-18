const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: { required: true, type: String },
  subject: String,
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  goodAnswer: Number,
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;

const { db } = require("../models/Question");
const Question = require("../models/Question");
const addQuestion = (req, res) => {
  res.render("addQuestion", { title: "Add question", css: "addQuestion" });
};

const postQuestion = (req, res) => {
  const formData = req.body;
  let allGood = true;
  let goodAnswer = 0;
  let goodCounter = 0;

  let questionText = "";
  let answer1 = "";
  let answer2 = "";
  let answer3 = "";
  let answer4 = "";

  if (formData.question) {
    questionText = formData.question;
  } else {
    allGood = false;
  }

  if (formData.answer1) {
    answer1 = formData.answer1;
  } else {
    allGood = false;
  }

  if (formData.answer2) {
    answer2 = formData.answer2;
  } else {
    allGood = false;
  }
  if (formData.answer3) {
    answer3 = formData.answer3;
  } else {
    allGood = false;
  }
  if (formData.answer4) {
    answer4 = formData.answer4;
  } else {
    allGood = false;
  }

  if (formData.isGood1) {
    goodCounter++;
    goodAnswer = 1;
  }

  if (formData.isGood2) {
    goodCounter++;
    goodAnswer = 2;
  }

  if (formData.isGood3) {
    goodCounter++;
    goodAnswer = 3;
  }

  if (formData.isGood4) {
    goodCounter++;
    goodAnswer = 4;
  }

  if (goodCounter == 1 && allGood) {
    const question = new Question({
      question: questionText,
      answer1,
      answer2,
      answer3,
      answer4,
      goodAnswer,
    });
    question.save();
    console.log("saved");
  } else {
    console.log("Not good");
  }
  res.redirect("/add");
};

const index = async (req, res) => {
  const data = await Question.find();
  res.render("index", { title: "Quizz", css: "index", data });
};

module.exports = {
  addQuestion,
  postQuestion,
  index,
};

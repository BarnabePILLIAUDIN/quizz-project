const questions = document.querySelectorAll(".question-div");
const goodAnswers = document.querySelectorAll(".good");
const wrongAnswers = document.querySelectorAll(".wrong");
const checkBuuton = document.querySelector(".checkButton");

const numberOfQuestions = questions.length;

const check = () => {
  const checkedGood = document.querySelectorAll(".check-good:checked");
  console.log(checkedGood);
  goodAnswers.forEach((element) => {
    element.style.color = "darkgreen";
  });
  wrongAnswers.forEach((element) => {
    element.style.color = "darkred";
  });
  const numberOfGoodAnswers = checkedGood.length;
  alert(`Your score is ${numberOfGoodAnswers}/${numberOfQuestions}`);
};

checkBuuton.addEventListener("click", check);

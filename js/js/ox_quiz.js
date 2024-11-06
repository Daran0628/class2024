// ox_quiz.js
import quizData from "./ox_quizData.js";

// console.log(quizData);

// DOM
const intro = document.getElementById("intro");
const quizWrap = document.getElementById("quiz_wrap");
const quizStart = document.querySelector("#intro .quiz_start");
const answerBtns = document.querySelectorAll("#answer_btns button");
const question = document.getElementById("question");
const resultWrap = document.getElementById("result_wrap");
const wrongWrap = document.getElementById("wrong_wrap");
const wrongList = document.getElementById("wrong_answer_list");
const wrongAnswer = document.querySelector(".wrong_answer");
const restart = document.querySelector(".restart");

// variable
let questionIndex = 0;
let score = 0;
let wrong = [];
let timer;

quizStart.addEventListener("click", function () {
  quizShow();
});

answerBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    //  console.log(this.innerHTML);
    checkAnswer(this.classList.value);
  });
});

wrongAnswer.addEventListener("click", function () {
  wrongShow();
});

restart.addEventListener("click", function () {
  wrongWrap.style.display = "none";

  wrong = [];
  score = 0;
  questionIndex = 0;

  quizShow();
});

function quizShow() {
  intro.style.display = "none";
  quizWrap.style.display = "block";

  const quizNo = document.getElementById("quiz_no");

  if (questionIndex > quizData.length - 1) {
    resultShow();
  } else {
    questionIndex++;
  }

  quizNo.innerHTML = `문제 ${questionIndex}`;
  question.innerHTML = quizData[questionIndex - 1].question;

  timer = setInterval(function () {}, 3000);
}

function checkAnswer(answer) {
  // o, x 버튼
  // 정답확인
  //   console.log(
  //     quizData[questionIndex - 1].question,
  //     quizData[questionIndex - 1].answer
  //   );
  if (answer === quizData[questionIndex - 1].answer) {
    score++;
  } else {
    wrong.push(quizData[questionIndex - 1].id);
  }

  quizShow();
}

function resultShow() {
  resultWrap.style.display = "block";
  quizWrap.style.display = "none";

  const resultScore = document.querySelector("#result_wrap .score");
  resultScore.innerHTML = `<span> ${score} </span> / <span> ${
    quizData.length - 1
  } </span>`;
}

function wrongShow() {
  wrongWrap.style.display = "block";
  resultWrap.style.display = "none";

  // 오답 노트
  // wrong 배열 : 순회 (배열의 갯수만큼 li 생성)
  //

  wrong.forEach(function (wrongId) {
    const wrongItem = document.createElement("li");
    const wrongQuiz = quizData.find((item) => item.id === wrongId);

    wrongItem.innerHTML = `문제${wrongQuiz.id}. ${wrongQuiz.question} (정답: ${wrongQuiz.answer})`;

    wrongList.appendChild(wrongItem);
  });
}

//quiz.js
import quizData from "./quizData.js";

//DOM
const intro = document.getElementById("intro");
const quizWrap = document.getElementById("quiz_wrap");
const quizStart = document.querySelector("#intro .quiz_start");
const answerBtn = document.querySelectorAll("#answer_btns button");
const question = document.getElementById("question");
const resultWrap = document.getElementById("result_wrap");
const wrongWrap = document.getElementById("wrong_wrap");
const wrongList = document.getElementById("wrong_answer_list");
const wrongAnswer = document.querySelector(".wrong_answer");
const restart = document.querySelector(".restart");
const gotoMain = document.querySelector(".toMain_btn");
const timerCount = document.querySelector(".timer");
const rightPop = document.querySelector(".result_pop_R");
const wrongPop = document.querySelector(".result_pop_W");

//variable
let questionIndex = 0;
let score = 0;
let result;
let wrong = [];
let timer;
let counter;
let countNum = 3;

timerCount.textContent = countNum; // 초기값

quizStart.addEventListener("click", function () {
  quizShow();
});

answerBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    //  checkAnswer(this.classList.value);
    checkAnswer(this.classList.value);
    //  checkAnswer2(this.classList.value);
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
  wrongList.innerHTML = "";

  quizShow();

  //   console.log(wrong);
});

gotoMain.addEventListener("click", function () {
  window.location.reload(true);
  window.location.href = "#"; // 새로운 링크로 이동

  //   resultWrap.style.display = "none";

  //   wrong = [];
  //   score = 0;
  //   questionIndex = 0;
  //   wrongList.innerHTML = "";

  //   intro.style.display = "block";
});

function quizShow() {
  intro.style.display = "none";
  quizWrap.style.display = "block";

  const quizNo = document.getElementById("quiz_no");

  if (questionIndex > quizData.length - 1) {
    resultShow(); // 문제풀이 완료
    clearTimeout(timer); // 마지막 타이머 삭제
    clearTimeout(counter); // 마지막 타이머 삭제
    return;
  } else {
    questionIndex++;
  }

  quizNo.innerHTML = `문제 ${questionIndex}`;
  question.innerHTML = quizData[questionIndex - 1].question;

  // 이전 타이머 삭제
  clearTimeout(timer);
  clearTimeout(counter);
  countNum = 3;

  timerCount.textContent = countNum;

  counter = setInterval(function () {
    countNum--;
    timerCount.textContent = countNum;
  }, 1000);
  timer = setTimeout(function () {
    // 오답 처리
    wrong.push(quizData[questionIndex - 1].id);
    // 다음 문제
    quizShow();
  }, 3000);
}

function checkAnswer(answer) {
  // o, x 버튼
  // 정답확인

  if (answer === quizData[questionIndex - 1].answer) {
    score++;
  } else {
    wrong.push(quizData[questionIndex - 1].id);
  }
  quizShow();
}
// function checkAnswer2(answer) {
//   // o, x 버튼
//   // 정답확인

//   if (answer === quizData[questionIndex - 1].answer) {
//     //  alert("O");
//     rightPop.animate({ display: "flex" }, 300);
//   } else {
//     wrongPop.style.display = "flex";
//   }
// }

function resultShow() {
  resultWrap.style.display = "block";
  quizWrap.style.display = "none";

  const resultScore = document.querySelector("#result_wrap .score");
  if (score < 10) {
    result = `<span>${score}</span> / <span>${quizData.length}</span>`;
  } else {
    result = `<p class='perfectScore'> 만점! 축하합니다! </p>
   <span>${score}</span> / <span>${quizData.length}</span>`;
    wrongAnswer.style.display = "none";
    gotoMain.style.display = "block";
  }

  resultScore.innerHTML = result;
}

function wrongShow() {
  resultWrap.style.display = "none";
  wrongWrap.style.display = "block";
  //오답 노트
  // wrong  배열 : 순회 (배열의 갯수만큼 li 생성)
  // wrongList.appendChild(wrongItem)
  wrong.forEach(function (wrongId) {
    const wrongItem = document.createElement("li");
    const wrongQuiz = quizData.find((item) => item.id === wrongId);

    wrongItem.innerHTML = `문제${wrongQuiz.id}. ${wrongQuiz.question} (${wrongQuiz.answer})`;

    wrongList.appendChild(wrongItem);
  });
}

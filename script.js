//Set questions as arrays, then do if-else for continuation?

//var questions = document.getElementById("question");

//function startQuiz() {

var score = 100;

var formHide = document.getElementById("submitForm");

formHide.style.display = "none";

var startBtn = document.getElementById("start");

startBtn.style.display = "inline-block";

var backBtn = document.getElementById("goBack");

backBtn.style.display = "none";

//Questions for the quiz
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

var i = 0;

//Displays questions from the array
function showQuestions() {
  if (i < questions.length) {
    document.getElementById("questionContainer").innerHTML = `
    <div>${questions[i].title}</div>
    <div class="choices">
            <button class="button">${questions[i].choices[0]}</button>
            <button class="button">${questions[i].choices[1]}</button>
            <button class="button">${questions[i].choices[2]}</button>
            <button class="button">${questions[i].choices[3]}</button>
            
    </div>
`;
  } else {
    document.getElementById("questionContainer").innerHTML = ``;
    endGame();
    document.querySelector("#showCheck").innerHTML = ``;
  }
}

//Ends the quiz
function endGame() {
  i = 10;
  //showQuestions();
  console.log("Test");
  formHide.style.display = "block";
  backBtn.style.display = "inline-block";
  time = 0;
  //show display form here
}

let time;

//Timer for the Quiz
document.getElementById("start").onclick = function () {
  const startingMinutes = 1;

  time = startingMinutes * 60;

  const timerEl = document.getElementById("timer");

  const myInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    time--;
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerEl.innerHTML = `${minutes}: ${seconds}`;

    if (time < 0) {
      time = 0;
    }

    if (time == 0) {
      clearInterval(myInterval);
      document.getElementById("questionContainer").innerHTML = ``;
      endGame();
      document.querySelector("#showCheck").innerHTML = ``;
    }
  }
  document.getElementById("startText").style.display = "none";
  showQuestions();
  startBtn.style.display = "none";
};

//Stores submit form input and makes list with initials and high score
document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("retainedInfo");
    console.log(document.getElementById("Initials").value);
    var inputValue = document.getElementById("Initials").value;
    console.log(inputValue);

    //puts info from submit form to local storage
    window.localStorage.setItem("submitInfo", JSON.stringify(inputValue));

    //retrieves info from local storage
    var retrieve = JSON.parse(window.localStorage.getItem("submitInfo"));

    var storageInfo = document.createElement("li");

    var scoreList = document.querySelector(".scoreList");

    scoreList.appendChild(storageInfo);

    storageInfo.innerHTML = retrieve + " - " + score;

    scoreList.style.display = "block";
  });

//Displays "Correct!" or "Wrong!", and deducts time and score when answer is wrong.
document.querySelector("#questionContainer").onclick = function (event) {
  console.log("clicked!");
  console.log(event.target.innerText);

  if (event.target.innerText === questions[i].answer) {
    document.querySelector("#showCheck").innerHTML = `
      <h3>Correct!</h3>`;
  } else {
    document.querySelector("#showCheck").innerHTML = `
      <h3>Wrong!</h3>`;
    console.log("wrong");
    time = time -= 5;
    score = score -= 20;
    //score deducted //time deducted
  }
  i++;
  showQuestions();
};

//Returns user to beginning of quiz when the "Go Back" button is clicked
document.getElementById("goBack").onclick = function () {
  formHide.style.display = "none";
  backBtn.style.display = "none";
  document.getElementById("startText").style.display = "block";
  document.getElementById("start").style.display = "inline-block";
  i = 0;
  score = 100;
  document.querySelector(".scoreList").style.display = "none";
};

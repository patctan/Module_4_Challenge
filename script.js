//Set questions as arrays, then do if-else for continuation?

//var questions = document.getElementById("question");

//function startQuiz() {

var score = 100;

//Questions for the quiz
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

  // const nameofFunction =() =>{}
var i=0

function showQuestions(){
    if (i< questions.length)

    //var goThruQuestions = document.getElementById('questionContainer');

    //goThruQuestions.addEventListener("click", function (event)) {
      //if(event.target.id === questions[2].answer) {
          //console.log("correct");}

    document.getElementById('questionContainer').innerHTML=`
    <div>${questions[i].title}</div>
    <div class="choices">
            <button class="button">${questions[i].choices[0]}</button>
            <button class="button">${questions[i].choices[1]}</button>
            <button class="button">${questions[i].choices[2]}</button>
            <button class="button">${questions[i].choices[3]}</button>
            
    </div>
`
}

let time;

//Timer for the Quiz
  document.getElementById('start').onclick = function(){
    const startingMinutes = 1;

     time = startingMinutes * 60;

    const timerEl = document.getElementById('timer');

     setInterval(updateTimer, 1000);

    // const myInterval = setInterval;

    function updateTimer() {
      const minutes = Math.floor(time/60);
      let seconds = time % 60;

      seconds = seconds <10 ? '0' + seconds : seconds;

      timerEl.innerHTML = `${minutes}: ${seconds}`;
      time--;

    };

    // function stopTimer() {
    //   if(time == 0) {
    //     clearInterval(myInterval);
    //   }
    // };
    
    // stopTimer();

    //document.getElementById('start').style.display= "none"
    //add timer
    document.getElementById('startText').style.display= "none" 
    showQuestions()}   
    //document.getElementById('questionContainer').style.display = "block"

    document.querySelector('#questionContainer').onclick = function(event){
   
    console.log('clicked!')
    console.log(event.target.innerText)

    if (event.target.innerText === questions[i].answer){
      document.querySelector("#showCheck").innerHTML=`
      <h3>Correct!</h3>`
  }else {

      document.querySelector("#showCheck").innerHTML=`
      <h3>Wrong!</h3>`
      console.log("wrong");
      time = time -= 5;
      score = score -= 20;
      //score deducted //time deducted
    }
  i++
  showQuestions()
    }
//document.querySelector('#questionContainer').onclick = function(event){
   
    //console.log('clicked!')
    //console.log(event.target.innerText)

    //if (event.target.innerText === questions[i].answer){
        //document.querySelector("#showCheck").innerHTML=`
        //<h3>Correct!</h3>`
   // }else {

        //document.querySelector("#showCheck").innerHTML=`
        //<h3>Wrong!</h3>`
        //time= time-5;
       // score= score-20;
        //score deducted //time deducted
    //}

    //i++
    //showQuestions()
 // }

  

//there's a display function?
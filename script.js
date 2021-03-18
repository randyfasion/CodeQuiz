var question = document.querySelector("#question");
var progresstext = document.querySelector("#progresstext");
var scoretext = document.querySelector("#score");
var progressbarfull = document.querySelector("#progressbarfull");
var choices = Array.from(document.querySelectorAll(".choicetext"));
//var timer = document.querySelector("#timer");

var currentquestion ={};
var acceptinganswers = true;
var score = 0;
var questioncounter = 0;
var availablequestions = [];
 
var questions = [
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        choice1: "1. Quotes",
        choice2: "2. curly brackets",
        choice3: "3. parentheses",
        answer: 2,
    },
    {
        question: "Commonly Used Data Types does NOT include?",
        choice1: "1. strings",
        choice2: "2. booleans",
        choice3: "3. alerts",
        answer: 3,
    },
    {
        question: "Arrays in javascript can be used to store _____.",
        choice1: "1. numbers and strings",
        choice2: "2. booleans",
        choice3: "3. all of the above",
        answer: 3,
    }
]
var SCORE_POINTS=100;
var MAX_QUESTIONS = 3;
//var timer = 0;


function startgame(){
    questioncounter=0;
    availablequestions=[...questions];
    getnewquestion();
}
function getnewquestion(){
   if(availablequestions.length===0 || questioncounter>MAX_QUESTIONS){  
localStorage.setItem("mostrecentscore", score);

return window.location.assign("end.html");
    }
questioncounter++
progresstext.innertext = 'question ${questioncounter} of ${MAX_QUESTIONS}';
progressbarfull.style.width = '${(questioncounter/MAX_QUESTIONS) * 100}%';



  var questionsindex = Math.floor(Math.random()*availablequestions.length);  
  currentquestion = availablequestions[questionsindex];
  question.innertext = currentquestion.question; 
   
  choices.forEach(choice =>{
      var number = choice.dataset["number"];
      choice.innertext = currentquestion["choice"+number];
  })
      availablequestions.splice(questionsindex, 1)

      acceptinganswers = true;
  
}
choices.forEach(choice =>{
    choice.addEventListener("click", e =>{
        if(!acceptinganswers) return;

        acceptinganswers=false;
        var selectedchoice = e.target;
        var selectedanswer = selectedchoice.dataset["number"];

        var classtoapply = selectedanswer == currentquestion.answer ? "correct": "incorrect";

       if(classtoapply=== "correct") {
            incrementscore(SCORE_POINTS);
       }

      selectedchoice.parentElement.classList.add(classtoapply);


       setTimeout(() => {
          selectedchoice.parentElement.classList.remove(classtoapply);
         getnewquestion(); 
          
       }, 1000)

    })
}) 
incrementscore = num =>{
    score+=num;
    scoretext.innertext = score;
    
}
startgame();
console.log(getnewquestion);
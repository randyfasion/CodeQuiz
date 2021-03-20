//Assignment code

//declare global variables
var question = document.querySelector("#question");
var progresstext = document.querySelector("#progresstext");
var scoretext = document.querySelector("#score");
var progressbarfull = document.querySelector("#progressbarfull");
var choices = Array.from(document.querySelectorAll(".choicetext"));
//var timer = document.querySelector("#timer");

var currentquestion =[];
var acceptinganswers = true;
var score = 0;
var questioncounter = 0;
var availablequestions = [];
 
//array for the 3 questions created
var questions = [
    {
        question: "The condition in an if/else statement is enclosed within _______.",
        choice1: "Quotes",
        choice2: "curly brackets",
        choice3: "parentheses",
        answer: 2,
    },
    {
        question: "Commonly Used Data Types does NOT include?",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        answer: 3,
    },
    {
        question: "Arrays in javascript can be used to store _____.",
        choice1: "numbers and strings",
        choice2: "booleans",
        choice3: "all of the above",
        answer: 3,
    }
]
var SCORE_POINTS=100;
var MAX_QUESTIONS = 3;
//var timer = 0;

//create function to begin quiz
function startgame(){
    questioncounter=0;
    score = 0;
    availablequestions=[...questions];
    getnewquestion();

}
//create function to grab the three questions 
function getnewquestion(){
    document.getElementById("question").innerHTML=questions[0].question;
    document.getElementById("1").innerHTML=questions[0].choice1;
    document.getElementById("2").innerHTML=questions[0].choice2;
    document.getElementById("3").innerHTML=questions[0].choice3;
    // if(answer=2){
    //     document.getElementById("question").innerHTML=questions[1].question;
    // }


   if(availablequestions.length===0 || questioncounter>MAX_QUESTIONS){  
//localStorage.setItem("mostrecentscore", score);

//return window.location.assign("/end.html");
document.getElementById("question").innerHTML=questions[1].question;
document.getElementById("1").innerHTML=questions[1].choice1;
    document.getElementById("2").innerHTML=questions[1].choice2;
    document.getElementById("3").innerHTML=questions[1].choice3;

    }
   
    //     document.getElementById("1").innerHTML=questions[2].choice1;
    // document.getElementById("2").innerHTML=questions[2].choice2;
    // document.getElementById("3").innerHTML=questions[2].choice3;
    // }
questioncounter++
progresstext.innertext = `question ${questioncounter} of ${MAX_QUESTIONS}`;
progressbarfull.style.width = `${(questioncounter/MAX_QUESTIONS) * 100}%`;


//Variable to generate random question
  var questionsindex = Math.floor(Math.random()*availablequestions.length);  
  currentquestion = availablequestions[questionsindex];
  question.innertext = currentquestion.question; 
   
  choices.forEach(choice =>{
      var number = choice.id["number"]; 
      choice.innertext = currentquestion["choice"+number];
  })
      availablequestions.splice(questionsindex, 1)

      acceptinganswers = true;
  
}
currentquestionindex = 0;
var currentquestion = questions[currentquestionindex];
console.log(currentquestion);


choices.forEach(choice =>{
    choice.addEventListener("click", e =>{
        if(!acceptinganswers) return;

        acceptinganswers=false;
        var selectedchoice = e.target;
        var selectedanswer = selectedchoice.id["number"];

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
//console.log(getnewquestion);
//onsole.log(questions);

var high_score = $('highScore');

// using javascript since setInterval is a javascript builtin
var timer_JS = document.getElementById('timer');

var question_Container = $('#questionContainer');
var li_El1 = $('#liElem1');
var li_El2 = $('#liElem2');
var li_El3 = $('#liElem3');
var li_El4 = $('#liElem4');
var answer_display = $('#answerDisplay');

var user_ = {
  name: "",
  score: 0
};


var questionIndex = 0;

// QUESTIONS 
//  (10) pulled from https://codeexercise.com/50-top-javascript-multiple-choice-questions-and-answers/
const questions = [
  {
    quest:"When a user views a page containing a JavaScript program, which machine actually executes the script?",
    options: [
      {text: "The User's machine running a Web browser", correct: true}, 
      {text: "The Web server", correct: false}, 
      {text: "A central machine deep within Netscape's corporate offices", correct: false}, 
      {text: "None of the above", correct: false}]
    },
  {
    quest:"______ JavaScript is also called client-side JavaScript.",
    options:[
      {text: "Microsoft", correct: false}, 
      {text: "Navigator", correct: true}, 
      {text: "LiveWire", correct: false}, 
      {text: "Native", correct: false}],
  },
  {
    quest:"_________ is a wrapped Java array, accessed from within JavaScript code.",
    options:[
      {text: "JavaArray", correct: true}, 
      {text: "JavaClass", correct: false}, 
      {text: "JavaObject", correct: false}, 
      {text: "JavaPackage", correct: false}],
  },
  {
    quest:"______method evaluates a string of JavaScript code in the context of the specified object.",
    options:[
      {text: "Eval", correct: true}, 
      {text: "ParseInt", correct: false}, 
      {text: "ParseFloat", correct: false}, 
      {text: "Efloat", correct: false}],
  },
  {
    quest:"Which of the following is the structure of an if statement?",
    options:[
      {text: "if (conditional expression is true) then execute this code end if", correct: false}, 
      {text: "if (conditional expression is true) execute this code end if", correct: false}, 
      {text: "if (conditional expression is true) {then execute this code>->}", correct: true}, 
      {text: "if (conditional expression is true) then {execute this code}", correct: false}],
    ans:"if (conditional expression is true) {then execute this code>->}"
  },
  {
    quest:"The _______ method of an Array object adds and/or removes elements from an array.",
    options:[
      {text: "Reverse", correct: false}, 
      {text: "Shift", correct: false}, 
      {text: "Slice", correct: false}, 
      {text: "Splice", correct: true}],
  },
  {
    quest:"Which is the correct way to write a JavaScript array?",
    options:[
      {text: "var txt = new Array(1:”tim”,2:”kim”,3:”jim”)", correct: false}, 
      {text: "var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)", correct: false}, 
      {text: "var txt = new Array(“tim”,”kim”,”jim”)", correct: true}, 
      {text: "var txt = new Array=”tim”,”kim”,”jim”", correct: false}],
  },
  {
    quest:"____________ is the tainted property of a window object.",
    options:[
      {text: "Pathname", correct: false}, 
      {text: "Protocol", correct: false}, 
      {text: "Defaultstatus", correct: true}, 
      {text: "Host", correct: false}],
  },
  {
    quest:"In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
    options:[
      {text: "a wrapper", correct: true}, 
      {text: "a link", correct: false}, 
      {text: "a cursor", correct: false}, 
      {text: "a form", correct: false}],
  },
  {
    quest:"Using _______ statement is how you test for a specific condition.",
    options:[
      {text: "Select", correct: true}, 
      {text: "If", correct: false}, 
      {text: "Switch", correct: false}, 
      {text: "For", correct: false}],
  },
];
const answers = [
  "The User's machine running a Web browser",
  "Navigator",
  "JavaArray",
  "Eval",
  "if (conditional expression is true) {then execute this code>->}",
  "Splice",
  "var txt = new Array(“tim”,”kim”,”jim”)",
  "Defaultstatus.",
  "a wrapper",
  "Select"
]


// timer function
function countdown() {
  var timer_temp = 11;

  setInterval(function(){
    if (timer_temp > 0) {
      --timer_temp
      console.log(timer_temp)
      timer_JS.innerHTML = `${timer_temp} seconds`;

    } else {
      clearInterval()
      console.log("Countdown complete")
      timer_JS.innerHTML = "TIMES UP"
      /* 
        Log user name and score and push to high score array for storage
      */
    }
  },1000)
};

question_Container.on('click', function() {
  countdown()
}) ;

// Answer Choice

function correct(timer_temp) {
  userScore++;
  timer_temp += 5;
}

function incorrect(timer_temp) {
  timer_temp -= 5;
}


/* -------------------------------------------------------------------------- */


/* window.alert("click ok to start") */
var shuffledQ, currentQIndex

/* window.alert("Click OK to Start!") */

function startGame() {
  shuffledQ=questions.sort(()=> Math.random() - 0.5)
  currentQIndex = 0
  setNextQ()
}

startGame();

function setNextQ() {
  resetEventListeners()
  showQ(shuffledQ[currentQIndex])
}

function showQ(question) {

  question_Container.html(question.quest)

  li_El1.html(question.options[0].text)
  li_El1.on('click', selectAnswer)

  li_El2.html(question.options[1].text)
  li_El2.on('click', selectAnswer)

  li_El3.html(question.options[2].text)
  li_El3.on('click', selectAnswer)

  li_El4.html(question.options[3].text)
  li_El4.on('click', selectAnswer)
}


// ANSWER SELECTION FOR CORRECT
function selectAnswer(e) {

  const selected = e.target.innerHTML

  answer_display.removeClass('bg-danger')
  answer_display.removeClass('bg-success')

  if (shuffledQ.length > currentQIndex + 1) {
    currentQIndex++

    if (answers.includes(selected)) {    
      user_.score++
      timer_JS += 5
      answer_display.html("Correct!")
      answer_display.addClass('bg-success')
      setNextQ();
  
    } else {
      timer_JS -= 5
      answer_display.html("Incorrect!")
      answer_display.addClass('bg-danger')
      setNextQ();
    }
  } else {
    window.alert("GAME OVER")
    resetEventListeners()
    answer_display.html(`Your Score: ${user_.score}`)
  }
}


function resetEventListeners() {
  li_El1.off()
  li_El2.off()
  li_El3.off()
  li_El4.off()
}
var high_score = $('highScore');
var questionIndex = 0;
var shuffledQ, currentQIndex
var timer_JS = $('#timer')
var reset_button = $('#reset')
var list_Ol = $('#ul-answers')
var formDisplay = $('#nameSubmitter')
var answer_display = $('#answerDisplay');
var question_Container = $('#questionContainer');
var li_El1 = $('#liElem1');
var li_El2 = $('#liElem2');
var li_El3 = $('#liElem3');
var li_El4 = $('#liElem4');

var timer_temp = 10;
var user_ = {
  name: "",
  score: 0
};

var inpUser = $('#userName');
var inpSubmitter = $('#submitter');

var liHigh_1 = $('#liHigh1')
var liHigh_2 = $('#liHigh2')
var liHigh_3 = $('#liHigh3')
var liHigh_4 = $('#liHigh4')
var liHigh_5 = $('#liHigh5')


/* --------------------------------------------------------------------------------------- */





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
  times = setInterval(function(){
    if (timer_temp > 0) {
      --timer_temp
      // timer_JS.innerHTML = `${timer_temp} seconds`;
      timer_JS.html(`${timer_temp} seconds`)

    } else {

      // hide question and answers

      clearInterval(times);
      resetEventListeners();
      displayFinish();

      saveHighScore();
      loadHighScore();
      
      /* 
        Log user name and score and push to high score array for storage
      */
    }
  },1000)
};

// UPDATE DISPLAY WITH BOOTSTRAP CLASSES
function displayFinish() {
  // hiding classes
  list_Ol.addClass('d-none')
  question_Container.addClass('d-none')

  // show name input
  formDisplay.removeClass('d-none')
  
  // changing timer apperance
  timer_JS.removeClass("bg-white")
  timer_JS.addClass("bg-danger")
  timer_JS.html(`TIME'S UP!`)
  clearInterval(times)

  // changing answer display to show score 
  answer_display.removeClass("text-white")
  answer_display.addClass("bg-warning text-white")
  answer_display.html(`Complete! <br/>Your Score: ${user_.score}`)
}

// Answer Choice
function correct(timer_temp) {
  userScore++;
  timer_temp += 5;
}

function incorrect(timer_temp) {
  timer_temp -= 10;
}

function startGame() {
  shuffledQ=questions.sort(()=> Math.random() - 0.5)
  currentQIndex = 0
  setNextQ()
}

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

  if (shuffledQ.length > currentQIndex + 1 && timer_temp > 0) {
    currentQIndex++

    if (answers.includes(selected)) {    
      user_.score++
      timer_temp += 5
      answer_display.html("Correct! <br/> +5 seconds")
      answer_display.addClass('bg-success')
      setNextQ();
  
    } else {
      timer_temp -= 5
      answer_display.html("Incorrect! <br/> -5 seconds")
      answer_display.addClass('bg-danger')
      setNextQ();
    }
  } else {
    
    resetEventListeners()
    answer_display.removeClass("text-white")
    answer_display.addClass("bg-warning text-dark")
    answer_display.html(`Complete! <br/>Your Score: ${user_.score}`)

  }
}

// REMOVE EVENT LISTENER FUNCTION
function resetEventListeners() {
  li_El1.off()
  li_El2.off()
  li_El3.off()
  li_El4.off()
}

// SAVING HIGH SCORE TO LOCAL STORAGE
function saveHighScore() {

  localStorage.setItem("user", JSON.stringify(user_))

  const score_ = {
    score: user_.score,
    name: user_.name
  }
  
}

// LOADING HIGH SCORES
function loadHighScore() {
  var user = localStorage.getItem("user")
  user = JSON.parse(user)


  liHigh_1.html(`${user.score} Points: ${user.name}`)
  liHigh_2.html(`${user.score} Points: ${user.name}`)
  liHigh_3.html(`${user.score} Points: ${user.name}`)
  liHigh_4.html(`${user.score} Points: ${user.name}`)
  liHigh_5.html(`${user.score} Points: ${user.name}`)
}

// score list sorting
var sorter = function(array) {
  var max=0;

}

// MAIN FUNCTION
$('document').ready(function() {
  loadHighScore() 

  $('body').on('click', function() {
    $('body').off()
    startGame();
    countdown();
  });
})


// RESET FUNCTION
reset_button.on('click', function() {
  location.reload();
})


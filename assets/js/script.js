var high_score = $('highScore');
var times = $('#timer');

var question_Container = $('#questionContainer');
var li_El1 = $('#liElem1');
var li_El1 = $('#liElem2');
var li_El1 = $('#liElem3');
var li_El1 = $('#liElem4');
var answer_display = $('#answerDisplay');


// QUESTIONS 
//  (10) pulled from https://codeexercise.com/50-top-javascript-multiple-choice-questions-and-answers/
const questions = {
  q_1: {
    quest:"When a user views a page containing a JavaScript program, which machine actually executes the script?",
    options: ["The User's machine running a Web browser", "The Web server", "A central machine deep within Netscape's corporate offices", "None of the above"],  
    ans: "The User's machine running a Web browser"},
  q_2: {
    quest:"______ JavaScript is also called client-side JavaScript.",
    options:["Microsoft", "Navigator", "LiveWire", "Native"],
    ans:"Navigator"
  },
  q_3: {
    quest:"__________ JavaScript is also called server-side JavaScript.",
    options:["Microsoft", "Navigator", "LiveWire", "Native"],
    ans:"LiveWire"
  },
  q_4: {
    quest:"Which of the following can't be done with client-side JavaScript?",
    options:["Validating a form", "Sending a form's contents by email", "Storing the form's contents to a database file on the server", "None of the above"],
    ans:"Storing the form's contents to a database file on the server"
  },
  q_5: {
    quest:"Which of the following way can be used to indicate the LANGUAGE attribute?",
    options:["<LANGUAGE=”JavaScriptVersion”>", "<SCRIPT LANGUAGE=”JavaScriptVersion”>", "<SCRIPT LANGUAGE=”JavaScriptVersion”> JavaScript statements…</SCRIPT>", "<SCRIPT LANGUAGE=”JavaScriptVersion”!> JavaScript statements…</SCRIPT>"],
    ans:"<SCRIPT LANGUAGE=”JavaScriptVersion”> JavaScript statements…</SCRIPT>"
  },
  q_6: {
    quest:"What is the correct syntax for referring to an external script called ” abc.js”?",
    options:["<script href=” abc.js”>", "<script name=” abc.js”>", "<script src=” abc.js”>", "None of the above"],
    ans:"<script src=” abc.js”>"
  },
  q_7: {
    quest:"Which is the correct way to write a JavaScript array?",
    options:["var txt = new Array(1:”tim”,2:”kim”,3:”jim”)", "var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)", "var txt = new Array(“tim”,”kim”,”jim”)", "var txt = new Array=”tim”,”kim”,”jim”"],
    ans:"var txt = new Array(“tim”,”kim”,”jim”)"
  },
  q_8: {
    quest:"What does the <noscript> tag do?",
    options:["Enclose text to be displayed by non-JavaScript browsers.", "Prevents scripts on the page from executing.", "Describes certain low-budget movies.", "None of the above"],
    ans:"Enclose text to be displayed by non-JavaScript browsers."
  },
  q_9: {
    quest:"Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
    options:["onfocus", "onblur", "onclick", "ondblclick"],
    ans:"onblur"
  },
  q_10: {
    quest:"Using _______ statement is how you test for a specific condition.",
    options:["Select", "If", "Switch", "For"],
    ans:"If"
  },
};

// Need to get timer API

times.html(function() {
  console.log("poop")
})


// GAME FUNCTION

/* 

function () {
  on select on first answer
    begin countdown

  
}

*/



// TIMER FUNCTIONS
/* 
function (no param) {
  
  set time at 20s

  while countdown is > 0

    if question is wrong
      subtract 10 seconds

    if correct 
      add 5s

  stops while loop at 0s

  at aend of countdown return true to stop questions and pull score
}

*/

// STORAGE FUNCTION

/* 
- store high scores
*/
//test.js
//For testing StateMachine.js

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Condition - have 5 seconds elapsed?
var counter = 5000;
var fiveSeconds = function() {
  if (counter <= 0) {
    counter = 5000;
    return true;
  }
  counter--;
  return false;
}

//Transitions
var timerDone = new Transition(redSquare, ctx.fillStyle="#fff");
var countDone = new Transition(blackSquare, ctx.fillStyle="#fff");
var redTrans = new Array(countDone);
var blackTrans = new Array(timerDone);

//States
var redSquare = new State(ctx.fillStyle="#f00", null, null, redTrans);
var blueSquare = new State(ctx.fillStyle="#000", null, null, blackTrans);

//SateMachine
var squareFSM = new StateMachine(redSquare);

function draw() {
  ctx.fillStyle = "#eee";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  
  squareFSM.update();
}

setInterval(draw(), 1000/60);

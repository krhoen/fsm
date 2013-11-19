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

//Transition lists
var redTrans = new Array();
var blackTrans = new Array();

//States
redSquare = new State(ctx.fillStyle="#f00", null, null);
blueSquare = new State(ctx.fillStyle="#000", null, null);

//Transitions
var timerDone = new Transition(redSquare, ctx.fillStyle="#fff");
var countDone = new Transition(blackSquare, ctx.fillStyle="#fff");
redTrans.push(countDone);
blackTrans.push(timerDone);
redSquare.setTransitions(redTrans);
blackSquare.setTransitions(blackTrans);

//SateMachine
var squareFSM = new StateMachine(redSquare);

function draw() {
  ctx.fillStyle = "#eee";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  
  squareFSM.update();
  ctx.fillRect(50,50,100,100);
}

setInterval(draw(), 1000/60);

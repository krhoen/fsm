//test.js
//For testing StateMachine.js

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#eee";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#555";
  ctx.fillRect(50,50,100,100);

//Condition - have 5 seconds elapsed?
var flip = new Condition();
flip.counter = 10;
flip.test = function() {
	if (this.counter <= 0) {
		this.counter = 10;
		return true;
	}
	this.counter--;
	return false;
};

//actions
var blacken = function() {console.log("blackSquare action");};
var redden = function() {console.log("redSquare Action");};
var whiten = function() {console.log("exit/transition/entry action");};

//Transition lists
var redTrans = new Array();
var blackTrans = new Array();

//States
redSquare = new State();
redSquare.setAction(redden);
redSquare.setEntryAction(whiten);
redSquare.setExitAction(whiten);
blackSquare = new State();
blackSquare.setAction(blacken);
blackSquare.setEntryAction(whiten);
blackSquare.setExitAction(whiten);

//Transitions
var timerDone = new Transition();
timerDone.setTargetState(redSquare);
timerDone.setAction(whiten);
timerDone.setCondition(flip);
var countDone = new Transition();
countDone.setTargetState(blackSquare);
countDone.setAction(whiten);
countDone.setCondition(flip);

redTrans.push(countDone);
blackTrans.push(timerDone);
redSquare.setTransitions(redTrans);
blackSquare.setTransitions(blackTrans);

//StateMachine
var squareFSM = new StateMachine();
squareFSM.setCurrentState(redSquare);

function draw() {
	var actions = squareFSM.update();
	for (var act in actions) {actions[act]();}
	if (squareFSM.getCurrentState() == redSquare) {ctx.fillStyle="#f00";}
	else {ctx.fillStyle="#000";}
	ctx.fillRect(50,50,100,100);
}

var running = setInterval(function() {draw()}, 100);
//type "clearInterval(running)" in JavaScript console to stop

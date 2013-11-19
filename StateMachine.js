// StateMachine.js
// referenced implementation from textbook
// State, Transition, Finite State Machine

function State(action, entryAction, exitAction) {
	this.action = action;
	this.entryAction = action;
	this.exitAction = action;
	
	this.setTransitions = function(trans) {this.transitions=trans};
	this.getAction = function() {return this.action;}
	this.getEntryAction = function() {return this.entryAction;}
	this.getExitAction = function() {return this.exitAction;}
	this.getTransitions = function() {return this.transitions;}
}

function Transition(targetState, action, condition) {
	this.targetState = targetState;
	this.action = action;
	this.condition = condition;
	
	this.getTargetState = function() {return this.targetState;}
	this.getAction = function() {return this.action;}
	this.isTriggered = function(game) {return condition);}
}

function StateMachine(currentState) {
	this.currentState = currentState;
	
	this.update = function() {
		var actions = new Array();
		var transition = null;
		var targetState;
		
		for(trans in currentState.getTransitions()) {
			if (trans.isTriggered()) {
				this.transition = trans;
				break;
			}
		}
		
		if (transition != null) {
			var targetState = transition.getTargetState();
			if (currentState.getExitAction() != null) actions.push(currentState.getExitAction());
			if (transition.getAction() != null) actions.push(transition.getAction());
			if (targetState.getEntryAction() != null) actions.push(targetState.getEntryAction());
			this.currentState = targetState;
			return actions;
		}
		else {
			actions.push(currentState.getAction());
			return actions;
		}
	}
	
	this.getCurrentState = function() {return currentState;};
}

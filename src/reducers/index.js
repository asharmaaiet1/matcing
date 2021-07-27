import { combineReducers } from "redux";
import * as actions from "../actions";

function droppedItems(state = [], action) {
	switch (action.type) {
		case actions.SET_DROPPED_ITEM:
			return [...state, {...action.val}];
		case actions.RESET_DROPPED_ITEMS:
			return action.val;
		default:
			return state;
	}
}

function linesArray(state=[], action) {
	switch (action.type) {
		case actions.SET_LINE:
			return [...state, {...action.val}];
		case actions.RESET_LINES:
			return action.val;
		default:
			return state;
	}
}

function buttonsEnabled(state = false, action) {
	switch (action.type) {
		case actions.SET_BUTTON_STATE:
			return action.val;
		default:
			return state;
	}
}

function answersSubmitted(state = false, action) {
	switch (action.type) {
		case actions.SET_ANSWER_SUBMITTED:
			return action.val;
		default:
			return state;
	}
}

function finalResult(state = false, action) {
	switch (action.type) {
		case actions.SET_RESULT:
			return action.val;
		default:
			return state;
	}
}

export default combineReducers({
	droppedItems,
	linesArray,
	buttonsEnabled,
	answersSubmitted,
	finalResult
});
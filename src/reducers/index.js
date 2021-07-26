import { combineReducers } from "redux";
import * as actions from "../actions";

function droppedItems(state = [], action) {
	switch (action.type) {
		case actions.SET_DROPPED_ITEM:
			return action.val;
		default:
			return state;
	}
}

function linesArray(state=[], action) {
	switch (action.type) {
		case actions.SET_LINE:
			console.log('action.val', action.val)
			return action.val;
		default:
			return state;
	}
}

export default combineReducers({
	droppedItems,
	linesArray
});
import matchingHelper from '../helper'
export const SET_DROPPED_ITEM = "SET_DROPPED_ITEM";
export const SET_LINE = "SET_LINE";
export const SET_BUTTON_STATE = "SET_BUTTON_STATE";
export const SET_ANSWER_SUBMITTED = "SET_ANSWER_SUBMITTED";
export const SET_RESULT = "SET_RESULT";
export const RESET_DROPPED_ITEMS = "RESET_DROPPED_ITEMS";
export const RESET_LINES = "RESET_LINES";

export function setDroppedItem(val) {
    return { 
        type: SET_DROPPED_ITEM, val 
    };
}

export function updateLines(val) {
    return { 
        type: SET_LINE, val 
    };
}

export function setButtonState(val) {
    return { 
        type: SET_BUTTON_STATE, val 
    };
}

export function setAnswerSubmitted(val) {
    return { 
        type: SET_ANSWER_SUBMITTED, val 
    };
}

export function setResult(val) {
    return { 
        type: SET_RESULT, val 
    };
}

export function resetDroppedItems(val) {
    return { 
        type: RESET_DROPPED_ITEMS, val 
    };
}

export function resetLines(val) {
    return { 
        type: RESET_LINES, val 
    };
}

export const thunk = {
    validateResult : (val) => {
        return (dispatch, getState) => {
            const result = matchingHelper.validateResult(getState());
            console.log('result', result);
            dispatch(setResult(result));
            dispatch(setAnswerSubmitted(true))
        }
    },
    resetActivity : (val) => {
        return (dispatch, getState) => {
            dispatch(resetDroppedItems([]));
            dispatch(resetLines([]));
            dispatch(setResult(false));
            dispatch(setAnswerSubmitted(false))
            dispatch(setButtonState(false))
        }
    }
}
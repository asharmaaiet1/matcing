export const SET_DROPPED_ITEM = "SET_DROPPED_ITEM";
export const SET_LINE = "SET_LINE";

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

export const thunk = {
    setDropped : (val) => {
        return (dispatch, getState) => {
            const droppedItems = getState().droppedItems;
            droppedItems.push(val);
            dispatch(setDroppedItem(droppedItems));
        }
    },
    setNewLine : (val) => {
        return (dispatch, getState) => {
            const linesArray = getState().linesArray;
            linesArray.push(val);
            dispatch(updateLines(linesArray));
        }
    }
}
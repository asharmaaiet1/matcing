import Activity from "../components/ActivityComponent";
import { connect } from "react-redux";
import { thunk, updateLines, setDroppedItem, setButtonState } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    questionText: data.questionText,
    questionSet: data.questionSet,
    buttonState: state.buttonsEnabled,
    answersSubmitted: state.answersSubmitted,
    finalResult: state.finalResult
  };
};

const mapDispatch = (dispatch) => ({
    setDrop: (val) => {
        dispatch(setDroppedItem(val))
        dispatch(setButtonState(true));
    },
    setLine: (val) => {
        dispatch(updateLines(val))
    },
    validateResult: () => {
        dispatch(thunk.validateResult());
    },
    resetActivity: () => {
        dispatch(thunk.resetActivity());
    }
});

export default connect(mapState, mapDispatch)(Activity);

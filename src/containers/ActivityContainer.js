import Activity from "../components/ActivityComponent";
import { connect } from "react-redux";
import { thunk, setDroppedItem } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    questionText: data.questionText,
    questionSet: data.questionSet
  };
};

const mapDispatch = (dispatch) => ({
    setDrop: (val) => {
        dispatch(thunk.setDropped(val))
    },
    setLine: (val) => {
        dispatch(thunk.setNewLine(val))
    }
});

export default connect(mapState, mapDispatch)(Activity);

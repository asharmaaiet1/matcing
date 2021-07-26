import Activity from "../components/lines/LinesComponent";
import { connect } from "react-redux";

const mapState = (state) => {
  console.log('state', state)
  return {
    linesArray: state.linesArray,
  };
};

const mapDispatch = (dispatch) => ({
  // 
});

export default connect(mapState, mapDispatch)(Activity);

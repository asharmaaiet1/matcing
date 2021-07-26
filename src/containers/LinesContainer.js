import Lines from "../components/lines/LinesComponent";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    linesArray: state.linesArray,
  };
};

const mapDispatch = (dispatch) => ({
  // 
});

export default connect(mapState, mapDispatch)(Lines);

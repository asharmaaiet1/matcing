import { useEffect } from "react";

const Lines = (props) => {

  const {
    linesArray
  } = props;

  return (
    <div className="lines-container">
      <svg xmlns="http://www.w3.org/2000/svg" style={{ "width": "100%", "height": "100%", "position": "absolute" }}>
        {
          linesArray.map((value, index) => {
            return (
              <line key={`line${1}`} id="s2_t3" x1={value.x1} y1={value.y1} x2={value.x2} y2={value.y2} stroke="#000000" strokeWidth="3" />
            )
          })
        }
      </svg>
    </div>
  );
}

export default Lines;

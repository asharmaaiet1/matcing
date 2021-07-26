import jQuery from 'jquery';
import { useEffect } from 'react';
import './App.scss';

function App() {

  useEffect(() => {
    // jQuery('.list').draggable();
  })

  return (
    <div className="app-container">
      <h3>Match option(s) to corresponding option(s):</h3>
      <h3>Drag and drop circle on the left to the corresponding circle n the right.</h3>

      <div className="activity-container">
        <div className="column-one">
          <p>Column 1 Heading</p>
          <div className="options-container">
            <ul className="list">
              <li>
                Option 1
              </li>
              <li>
                Option 2
              </li>
              <li>
                Option 3
              </li>
              <li>
                Option 4
              </li>
            </ul>
          </div>
        </div>
        <div className="column-two">
          <p>Column 2 Heading</p>
          <div className="options-container">
          <ul className="list">
              <li>
                Option 1
              </li>
              <li>
                Option 2
              </li>
              <li>
                Option 3
              </li>
              <li>
                Option 4
              </li>
              <li>
                Option 1
              </li>
              <li>
                Option 2
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default App;

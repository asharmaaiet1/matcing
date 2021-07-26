import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import './App.scss';
import ActivityContainer from "./containers/ActivityContainer";

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <ActivityContainer />
    </Provider>
  );
}

export default App;

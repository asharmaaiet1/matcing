import React from 'react';
import ReactDOM from 'react-dom';
import 'webpack-jquery-ui';
import jQuery from 'jquery';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

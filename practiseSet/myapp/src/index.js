import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import UseContext from './components/useContext/UseContext';
import UseState from './components/useContext/UseState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UseState>
    <App />
  </UseState>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

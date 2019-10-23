import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';
import App from './App';
import './index.css';

// const store = createStore(rootReducer, composeWithDevTools())

// <Provider 
  // store= {store}>
  // </Provider>,

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

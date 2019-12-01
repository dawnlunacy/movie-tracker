import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers'
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
ReactDOM.render(router, document.getElementById('root'));

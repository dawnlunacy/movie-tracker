import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './components/App';
const store = createStore(rootReducer, composeWithDevTools());



ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);


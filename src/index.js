import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers'
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './components/App';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
ReactDOM.render(router, document.getElementById('root'));

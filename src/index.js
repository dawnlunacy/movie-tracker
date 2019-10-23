import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// const store = createStore(rootReducer, composeWithDevTools())

// <Provider 
  // store= {store}>
  // </Provider>,

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();


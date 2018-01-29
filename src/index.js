/* eslint  import/newline-after-import: "off" */
/* eslint  import/first: "off" */
/* eslint  import/no-extraneous-dependencies: "off" */
/* eslint  import/no-unresolved: "off" */
/* eslint  import/extensions: "off" */

import dotenv from 'dotenv';

dotenv.config();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
// import 'aws-sdk';
import 'tracking';
import 'tracking/build/data/face';

import './index.css';
import './aws-config';
import rootReducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

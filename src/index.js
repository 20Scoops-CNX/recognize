import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'aws-sdk';
import 'tracking';
import 'tracking/build/data/face';

import './index.css';
import './aws-config';
import rootReducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

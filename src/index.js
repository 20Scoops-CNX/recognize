import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tracking';
import 'tracking/build/data/face';
import 'aws-sdk';
import './aws-config';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

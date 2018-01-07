import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'aws-sdk';
import './aws-config';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tracking';
import 'tracking/build/data/face';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

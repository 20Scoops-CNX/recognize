
import React from 'react';
import ReactDOM from 'react-dom';
import 'aws-sdk';
import 'tracking';
import 'tracking/build/data/face';

import './index.css';
import './aws-config';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

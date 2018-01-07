//  @flow

import React from 'react';
import logo from './logo.svg';
import './App.css';
import WebCam from './WebCam/WebCam';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div>
      <WebCam />
    </div>
  </div>
);

export default App;

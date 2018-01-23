//  @flow

import React from 'react';
import logo from './logo.svg';
import './App.scss';
import WebCam from './components/WebCam/WebCam';
import ShowImageModal from './components/ShowImageModal/ShowImageModal';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div>
      <WebCam />
      <ShowImageModal />
    </div>
  </div>
);

export default App;

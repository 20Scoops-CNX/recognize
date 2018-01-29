//  @flow

import React from 'react';
import './App.scss';
import WebCam from './components/WebCam/WebCam';
import ShowImageModal from './components/ShowImageModal/ShowImageModal';
import Header from './components/Header/Header';

const App = () => (
  <div className="App">
    <Header />
    <div>
      <WebCam />
      <ShowImageModal />
    </div>
  </div>
);

export default App;

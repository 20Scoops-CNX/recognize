//  @flow

import React from 'react';
import './App.scss';
import WebCam from './components/WebCam/WebCam';
import Header from './components/Header/Header';
import ShowImageModal from './components/ShowImageModal/ShowImageModal';

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

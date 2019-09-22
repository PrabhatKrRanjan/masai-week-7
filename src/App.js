import React from 'react';
import logo from './logo.svg';
import './component/App.css';
import MicrosoftNav from './component/microsoftNav.js';
import MicrosofMain from './component/microsoftmain.js';
import Microsoftfooter from './component/microsoftfooter.js';

function App() {
  return (
    <div>
      <MicrosoftNav />
      <MicrosofMain />
      <Microsoftfooter />
    </div>
  );
}

export default App;

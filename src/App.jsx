/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Display from './components/Display/Display';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className='app'>
      <Header 
        onClick={() => setActiveMenu(!activeMenu)} />
      <div className='desktop'>
        <Menu 
          activeMenu={activeMenu} />
        <Display />
      </div>
    </div>
  );
}

export default App;

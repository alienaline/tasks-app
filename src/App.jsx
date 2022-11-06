import React, {useState} from 'react';
import Header from './containers/Header/Header';
import Menu from './containers/Menu/Menu';
import Display from './containers/Display/Display';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className='app'>
      <Header 
        onClick={() => setActiveMenu(!activeMenu)}
        activeMenu={activeMenu} />
      <div className='desktop'>
        <Menu 
          activeMenu={activeMenu} />
        <Display />
      </div>
    </div>
  );
}

export default App;

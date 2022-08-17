import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Display from './components/Display/Display';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='display'>
        <Menu />
        <Display />
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Display from './components/Display/Display';
import './App.css';

function App() {
  const [folders, setFolders] = useState([{'id': 0, 'folderName': 'Frontend'}, {'id': 1, 'folderName': 'Backend'}]);

  const deleteFolder = (id) => {
      const index = folders.map((item) => item.id).indexOf(id);
      setFolders(folders => {
        delete folders[index];
        return folders;
      });
  };

  return (
    <div className='app'>
      <Header />
      <div className='display'>
        <Menu 
          onDelete={deleteFolder}
          folders={folders}
        />
        <Display />
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Display from './components/Display/Display';
import './App.css';

function App() {
  const [folders, setFolders] = useState([{'id': 0, 'folderName': 'Frontend', 'tasksList': ['create repo', 'learn TS']}, {'id': 1, 'folderName': 'Backend', 'tasksList': ['learn Python']}]);
  const [currentFolder, setCurrentFolder] = useState();

  const chooseFolderHandler = (folderId) => {
    setCurrentFolder(folders[folderId]);
  };


  const deleteFolderHandler = (folderId) => {
    const folderFiltered = folders.filter(elem => elem.id !== folderId);
    setFolders(folderFiltered);

    if (currentFolder.id == folderId) {
      setCurrentFolder();
    }
  };

  return (
    <div className='app'>
      <Header />
      <div className='desktop'>
        <Menu 
          onDelete={deleteFolderHandler}
          onClick={chooseFolderHandler}
          folders={folders}
          currentFolder={currentFolder}/>
        <Display 
          currentFolder={currentFolder}/>
      </div>
    </div>
  );
}

export default App;

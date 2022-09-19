/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Display from './components/Display/Display';
import './App.css';
import { Prev } from 'react-bootstrap/esm/PageItem';

function App() {
  const [folders, setFolders] = useState([{'id': 0, 'folderName': 'Frontend', 'colorId': 0}, {'id': 1, 'folderName': 'Backend', 'colorId': 1}]);
  const [tasks, setTasks] = useState([{'id': 0, 'folderId': 0, 'text': 'learnJs'}, {'id': 1, 'folderId': 1, 'text': 'learn python'}]);
  const [currentFolder, setCurrentFolder] = useState();
  let nextId = 0;


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

  const addTaskHandler = (folderId, text) => {
    setTasks([tasks, {'id': nextId++, 'folderId': folderId, 'text': text}]);
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
          currentFolder={currentFolder}
          tasks={tasks} 
          onClick={addTaskHandler} />
      </div>
    </div>
  );
}

export default App;

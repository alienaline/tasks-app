/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Display from './components/Display/Display';
import './App.css';

function App() {
  const [folders, setFolders] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);


  const chooseFolderHandler = (folderId) => {
    setCurrentFolder(folders[folderId]);
  };

  const deleteFolderHandler = (folderId) => {
    const folderFiltered = folders.filter(elem => elem.id !== folderId);
    const tasksFiltered = tasks.filter(elem => elem.folderId !== folderId);
    setFolders(folderFiltered);
    setTasks(tasksFiltered);

    if (currentFolder) {
      currentFolder.id == folderId ? setCurrentFolder(null) : currentFolder;
    }
  };

  const addTaskHandler = (folderId, text) => {
    if (text == '') return false;
    const id = tasks.length;
    setTasks([...tasks, {'id': id, 'folderId': folderId, 'text': text, 'checked': false}]);
  };

  const addFolderHandler = (folderName, color) => {
    if (folderName == '') return false;
    const id = folders.length;
    setFolders([...folders, {'id': id, 'folderName': folderName, 'color': color}]);
  };

  return (
    <div className='app'>
      <Header />
      <div className='desktop'>
        <Menu 
          onDelete={deleteFolderHandler}
          onClick={chooseFolderHandler}
          onAdd={addFolderHandler}
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

/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Display from './components/Display/Display';
import './App.css';

function App() {
  const [folders, setFolders] = useState([{'id': 0, 'folderName': 'Frontend', 'colorId': 0}, {'id': 1, 'folderName': 'Backend', 'colorId': 1}]);
  const [tasks, setTasks] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);
  let nextId = 0;


  const chooseFolderHandler = (folderId) => {
    setCurrentFolder(folders[folderId]);
  };

  const deleteFolderHandler = (folderId) => {
    const folderFiltered = folders.filter(elem => elem.id !== folderId);
    const tasksFiltered = tasks.filter(elem => elem.folderId !== folderId);
    setFolders(folderFiltered);
    setTasks(tasksFiltered);

    if (currentFolder.id == folderId) {
      setCurrentFolder(null);
    }
  };

  const addTaskHandler = (folderId, text) => {
    if (text == '') return false;

    setTasks([...tasks, {'id': nextId++, 'folderId': folderId, 'text': text, 'checked': false}]);
  };

  //const setCheckedStatus = (id) => {
  //  setTasks(({tasks}) => (
  //    [
  //      ...tasks,
  //      {
  //        ...tasks[id],
  //       ...tasks.folderId,
  //       ...tasks.text,
  //        checked: !tasks[id].checked,
  //      }
  //    ]
  //  ));
  // };

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
          onClick={addTaskHandler} 
          //setCheckedStatus={setCheckedStatus} 
          />
      </div>
    </div>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Display from './components/Display/Display';
import './App.css';

function App() {
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [currentList, setCurrentList] = useState(null);
  const [activeMenu, setActiveMenu] = useState(true);

  const handleChooseList = (listId) => {
    setCurrentList(...lists.filter((item) => item.id == listId));
  };

  const handleDeleteList = (listId) => {
    const listFiltered = lists.filter(elem => elem.id !== listId);
    const tasksFiltered = tasks.filter(elem => elem.listId !== listId);
    setLists(listFiltered);
    setTasks(tasksFiltered);

    if (currentList) {
      currentList.id == listId ? setCurrentList(null) : currentList;
    }
  };

  const handleAddTask = (listId, text) => {
    if (text.trim() == '') return false;
    const lastId = tasks.length ? (tasks[tasks.length - 1].id + 1) : 0;
    setTasks([...tasks, {'id': lastId, 'listId': listId, 'text': text}]);
  };

  const handleAddList = (listName, color) => {
    if (listName.trim() == '') return false;
    const lastId = lists.length ? (lists[lists.length - 1].id + 1) : 0;
    setLists([...lists, {'id': lastId, 'listName': listName, 'color': color}]);
  };

  const handleSetActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className='app'>
      <Header 
        onClick={handleSetActiveMenu}
      />
      <div className='desktop'>
        <Menu 
          activeMenu={activeMenu}
          onDelete={handleDeleteList}
          onClick={handleChooseList}
          onAdd={handleAddList}
          lists={lists} />
        <Display 
          currentList={currentList}
          tasks={tasks} 
          onClick={handleAddTask}  />
      </div>
    </div>
  );
}

export default App;

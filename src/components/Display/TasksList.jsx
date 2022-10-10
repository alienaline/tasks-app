/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentList } from '../../store/listsSlice/listsSlice';
import { selectTasks, toggleTask } from '../../store/tasksSlice/tasksSlice';

function TasksList() {
    const currentList = useSelector(selectCurrentList);
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (currentList.listName) {
        const list = [...tasks.filter((item) => item.listId == currentList.id)];

        return (
            <ul className='tasksList'>
                {list.map((item) => 
                    <li 
                        key={item.text.toString()} 
                        className='task'>
                        <label 
                            key={item.text.toString()} 
                            className='taskText'>
                            <input 
                                type='checkbox' 
                                key={item.text.toString()} 
                                id={item.id}
                                onClick={() => dispatch(toggleTask(item.id))}
                                className='icon checkbox' />
                            {item.text}
                        </label>
                    </li>
                )}
            </ul> 
        );
    } else {
        return (
            <h2 className='mockText'>
                Select or create a list.
            </h2>
        );
    }
}

export default TasksList;
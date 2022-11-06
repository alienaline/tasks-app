/* eslint-disable no-unused-vars */
import React from 'react';
import ButtonClearList from './ButtonClearList';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentList } from '../../store/listsSlice/listsSlice';
import { deleteTask, selectTasks, toggleTask } from '../../store/tasksSlice/tasksSlice';
import { IoIosClose } from 'react-icons/io';

function TasksList() {
    const currentList = useSelector(selectCurrentList);
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (currentList.listName) {
        const list = [...tasks.filter((item) => item.listId == currentList.id)];

        return (
            <>
            <ul className='tasksList'>
                {list.map((item) => 
                    <li 
                        key={item.id} 
                        className='task'>
                        <input 
                            type='checkbox' 
                            id={item.id}
                            onClick={() => dispatch(toggleTask(item.id))}
                            className={`icon ${item.completed ? 'checked' : ''}`} />
                        <label 
                            htmlFor={item.id}
                            className='taskText'
                            data-state={item.completed ? 'completed' : ''}>
                            {item.text}
                        </label>
                        <button
                            type='button'
                            onClick={() => dispatch(deleteTask(item.id))}
                            className='buttonRemove'>
                            <IoIosClose className='icon iconRemove'/>
                        </button>
                    </li>
                )}
            </ul> 
            {list.length ? <ButtonClearList /> : ''}
            </>
            
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
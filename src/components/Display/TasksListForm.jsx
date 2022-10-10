/* eslint-disable no-unused-vars */
import React, {useState, useRef} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentList } from '../../store/listsSlice/listsSlice';
import { addTask } from '../../store/tasksSlice/tasksSlice';


function TasksListForm() {
    const [activeState, setActiveState] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const currentList = useSelector(selectCurrentList);
    const dispatch = useDispatch();

    const handleAddTask = (event) => {
        event.preventDefault();
        if (inputValue == '') return false;
        dispatch(addTask({listId: currentList.id, text: inputValue}));
        setInputValue('');
    };

    return (
        <div className={`tasksListForm ${currentList.listName ? 'active' : 'disabled'}`}>
            <button 
                className={`newTaskButton ${activeState ? 'disabled' : 'active'}`}
                onClick={() => setActiveState(prev => !prev)}>
                <AiOutlinePlus className='icon newTaskButton'/>
                New Task
            </button>
            <form className={`form ${activeState ? 'active' : 'disabled'}`}
                    onSubmit={handleAddTask}>
                <input
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    type='text'
                    maxLength={120}
                    placeholder='write a task here'
                    className='inputTasksForm'>
                </input>
                <button type='submit'
                        className='submitButton' >
                        Add to list
                </button> 
                <button type='button'
                        className='cancelButton' 
                        onClick={() => setActiveState(prev => !prev)}>
                        Cancel 
                </button>
            </form>
        </div>
    );
}

TasksListForm.propTypes = {
    currentList: PropTypes.object,
    onClick: PropTypes.func,
};

export default TasksListForm;
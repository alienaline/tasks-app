/* eslint-disable no-unused-vars */
import React, {useState, useRef} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import PropTypes from 'prop-types';


function TasksListForm(props) {
    const [activeState, setActiveState] = useState(false);
    const inputRef = useRef();

    const changeState = () => {
        setActiveState(prev => !prev);
    };

    const addToList = () => {
        props.onClick(props.currentFolder.id, inputRef.current.value);
        inputRef.current.value = '';
    };

    return (
        <div className={`tasksListForm ${props.currentFolder ? 'active' : 'disabled'}`}>
            <button 
                className={`addTaskButton ${activeState ? 'disabled' : 'active'}`}
                onClick={() => changeState()}>
                <AiOutlinePlus className='icon addTaskButton'/>
                New Task
            </button>
            <form className={`form ${activeState ? 'active' : 'disabled'}`}>
                <input
                    ref={inputRef}
                    type='text'
                    maxLength={120}
                    placeholder='write a task here'
                    className='inputTasksForm'>
                </input>
                <button type='button'
                        className='buttonSubmit'
                        onClick={() => addToList()}>
                        Add to list
                </button> 
                <button type='button'
                        className='buttonCancel' 
                        onClick={() => changeState()}>
                        Cancel 
                </button>
            </form>
        </div>
    );
}

TasksListForm.propTypes = {
    currentFolder: PropTypes.object,
    onClick: PropTypes.func,
};

export default TasksListForm;
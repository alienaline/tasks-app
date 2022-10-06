/* eslint-disable no-unused-vars */
import React, {useState, useRef} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import PropTypes from 'prop-types';


function TasksListForm(props) {
    const [activeState, setActiveState] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const changeActiveState = () => {
        setActiveState(prev => !prev);
    };

    const handleSetInputValue = (event) => {
        setInputValue(event.target.value);
    };

    const addToList = (event) => {
        event.preventDefault();
        props.onClick(props.currentList.id, inputValue);
        setInputValue('');
    };

    return (
        <div className={`tasksListForm ${props.currentList ? 'active' : 'disabled'}`}>
            <button 
                className={`newTaskButton ${activeState ? 'disabled' : 'active'}`}
                onClick={() => changeActiveState()}>
                <AiOutlinePlus className='icon newTaskButton'/>
                New Task
            </button>
            <form className={`form ${activeState ? 'active' : 'disabled'}`}
                    onSubmit={addToList}>
                <input
                    value={inputValue}
                    onChange={handleSetInputValue}
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
                        onClick={() => changeActiveState()}>
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
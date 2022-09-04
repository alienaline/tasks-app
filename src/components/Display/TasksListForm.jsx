import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

function TasksListForm() {
    return (
        <form className='tasksListForm'>
            <button 
                type='submit'
                className='addTaskButton'>
                <AiOutlinePlus className='icon'/>
            </button>
            <input
                type='text'
                maxLength={120}
                placeholder='write a task'
                className='inputTasksForm'>
            </input>
        </form>
    );
}

export default TasksListForm;
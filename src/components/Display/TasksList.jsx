/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function TasksList(props) {

    const setCheckedStatus = (id) => {
        props.tasks[id].checked = !props.tasks[id].checked;
    };

    if (props.currentFolder) {
        const list = [...props.tasks.filter((e) => e.folderId == props.currentFolder.id)];
        
        return (
            <ul className='tasksList'>
                {list.map((item) => 
                    <li key={item.text.toString()} 
                        className='task'>
                        <label key={item.text.toString()} 
                                className='taskText'>
                            <input type='checkbox' 
                                    key={item.text.toString()} 
                                    id={item.id}
                                    className='icon checkbox' 
                                    onClick={(id) => setCheckedStatus(id)} />
                            {item.text}
                        </label>
                    </li>
                )}
            </ul> 
        );
    } else {
        return (
            <h2 className='mockText'>
                Select or create a folder.
            </h2>
        );
    }
}

TasksList.propTypes = {
    currentFolder: PropTypes.object,
    tasks: PropTypes.array
};

export default TasksList;
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function TasksList(props) {

    if (props.currentFolder) {
        const list = [...props.tasks.filter((e) => e.folderId == props.currentFolder.id)];
        
        return (
            <ul className='tasksList'>
                {list.map((item) => 
                    <li key={item.id.toString()} 
                        className='task'>
                        <label key={item.id.toString()} 
                                className='taskText'>
                            <input type='checkbox' 
                                    key={item.id.toString()} 
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
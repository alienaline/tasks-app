import React from 'react';
import PropTypes from 'prop-types';

function TasksList(props) {

    if (props.currentFolder) {
        return (
            <ul className='tasksList'>
                {props.currentFolder.tasksList.map((item) => 
                    <li key={item.toString()} 
                        className='task'>
                        <label key={item.toString()} 
                                className='taskText'>
                            <input type='checkbox' 
                                    key={item.toString()} 
                                    className='icon checkbox' />
                            {item}
                        </label>
                    </li>
                )}
            </ul> 
        );
    } else {
        return 'no tasks yet';
    }
}

TasksList.propTypes = {
    currentFolder: PropTypes.object
};

export default TasksList;
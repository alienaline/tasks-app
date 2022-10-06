/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TasksList(props) {

    if (props.currentList) {
        const list = [...props.tasks.filter((event) => event.listId == props.currentList.id)];

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

TasksList.propTypes = {
    currentList: PropTypes.object,
    tasks: PropTypes.array,
    setCheckedStatus: PropTypes.func
};

export default TasksList;
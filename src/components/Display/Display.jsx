import React from 'react';
import DisplayHeader from './DisplayHeader';
import { DisplayStyles } from '../../styles/DisplayStyles';
import PropTypes from 'prop-types';
import TasksListForm from './TasksListForm';
import TasksList from './TasksList';


function Display(props) {
    return (
        <DisplayStyles>
            <DisplayHeader 
                currentList={props.currentList} />
            <hr />
            <TasksList 
                currentList={props.currentList}
                tasks={props.tasks} />
            <TasksListForm 
                currentList={props.currentList}
                tasks={props.tasks} 
                onClick={props.onClick} />
        </DisplayStyles>
    );
}

Display.propTypes = {
    currentList: PropTypes.object,
    tasks: PropTypes.array,
    onClick: PropTypes.func
};

export default Display;
import React from 'react';
import DisplayHeader from './DisplayHeader';
import Comment from './Comment';
import { DisplayStyles } from '../../styles/DisplayStyles';
import PropTypes from 'prop-types';
import TasksListForm from './TasksListForm';
import TasksList from './TasksList';


function Display(props) {
    return (
        <DisplayStyles>
            <div className='Display'>
                <DisplayHeader 
                    currentFolder={props.currentFolder} />
                <Comment 
                    currentFolder={props.currentFolder} />
                <hr />
                <TasksList 
                    currentFolder={props.currentFolder}
                    tasks={props.tasks} />
                <TasksListForm 
                    currentFolder={props.currentFolder}
                    tasks={props.tasks} 
                    onClick={props.onClick} />
            </div>
        </DisplayStyles>
    );
}

Display.propTypes = {
    currentFolder: PropTypes.object,
    tasks: PropTypes.array,
    onClick: PropTypes.func
};

export default Display;
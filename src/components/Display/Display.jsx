import React from 'react';
import Header from './Header';
import Comment from './Comment';
import { DisplayStyles } from '../../styles/Styles';
import PropTypes from 'prop-types';
import TasksListForm from './TasksListForm';
import TasksList from './TasksList';


function Display(props) {
    return (
        <DisplayStyles>
            <div className='Display'>
                <Header 
                    currentFolder={props.currentFolder} />
                <Comment />
                <hr />
                <TasksList 
                    currentFolder={props.currentFolder} />
                <TasksListForm />
            </div>
        </DisplayStyles>
    );
}

Display.propTypes = {
    currentFolder: PropTypes.object,
};

export default Display;
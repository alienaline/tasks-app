import React from 'react';
import DisplayHeader from '../../components/Display/DisplayHeader';
import { DisplayStyles } from './DisplayStyles';
import PropTypes from 'prop-types';
import TasksListForm from '../../components/Display/TasksListForm';
import TasksList from '../../components/Display/TasksList';


function Display(props) {
    return (
        <DisplayStyles>
            <div className='displayContent'>
                <DisplayHeader />
                <hr />
                <TasksList />
                <TasksListForm 
                    onClick={props.onClick} />
            </div>
        </DisplayStyles>
    );
}

Display.propTypes = {
    currentList: PropTypes.object,
    tasks: PropTypes.array,
    onClick: PropTypes.func
};

export default Display;
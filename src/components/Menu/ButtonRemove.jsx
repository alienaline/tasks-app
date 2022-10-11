import React from 'react';
import PropTypes from 'prop-types';
import {CgClose} from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentList, deleteList, selectCurrentList } from '../../store/listsSlice/listsSlice';
import { deleteTasks } from '../../store/tasksSlice/tasksSlice';

function ButtonRemove(props) {
    const dispatch = useDispatch();
    const currentList = useSelector(selectCurrentList);

    const handleDeleteList = () => {
        dispatch(deleteList(props.id));
        dispatch(deleteTasks(props.id));
        if (currentList.id == props.id) dispatch(clearCurrentList());
    };

    return (
        <button className='removeButton' onClick={handleDeleteList}>
            <CgClose className='removeButton'/>
        </button> 
    );
}

ButtonRemove.propTypes = {
    onDelete: PropTypes.func,
    id: PropTypes.number
};

export default ButtonRemove;
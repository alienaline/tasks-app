import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCurrentList } from '../../store/listsSlice/listsSlice';

function ButtonList(props) {
    const dispatch = useDispatch();

    return (
        <button 
            className='listName'
            onClick={() => dispatch(setCurrentList({id: props.id, listName: props.listName, color: props.color}))}>
            <span className={`listColorIcon icon ${props.color}`}/>
            {props.listName}
        </button>
    );
}

ButtonList.propTypes = {
    listName: PropTypes.string,
    id: PropTypes.number,
    color: PropTypes.string
};

export default ButtonList;
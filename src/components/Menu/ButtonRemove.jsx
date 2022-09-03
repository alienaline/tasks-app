import React from 'react';
import PropTypes from 'prop-types';
import {CgClose} from 'react-icons/cg';

function ButtonRemove(props) {
    
    return (
        <button className='removeButton' onClick={() => props.onDelete(props.id)}>
            <CgClose className='removeButton'/>
        </button> 
    );
}

ButtonRemove.propTypes = {
    onDelete: PropTypes.func,
    id: PropTypes.number
};

export default ButtonRemove;
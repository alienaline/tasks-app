/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {AiOutlinePlus} from 'react-icons/ai';
import ModalNewList from './ModalNewList';

function ButtonNewList () {
    const [activeState, setActiveState] = useState(false);

    return (
        <>
            <button 
                className='createListButton listButton'
                onClick={() => setActiveState(prev => !prev)}>
                <AiOutlinePlus className='icon'/>
                New list
            </button>
            <ModalNewList 
                activeState={activeState}
                onClick={() => setActiveState(prev => !prev)} />
        </>
    );
}

ButtonNewList.propTypes = {
    onAdd: PropTypes.func
};

export default ButtonNewList;
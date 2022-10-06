/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {AiOutlinePlus} from 'react-icons/ai';
import ModalNewList from './ModalNewList';

function ButtonNewList (props) {
    const [activeState, setActiveState] = useState(false);
    
    const changeActiveState = () => {
        setActiveState(prev => !prev);
    };

    return (
        <>
            <button 
                className='createListButton listButton'
                onClick={() => changeActiveState()}>
                <AiOutlinePlus className='icon'/>
                New list
            </button>
            <ModalNewList 
                activeState={activeState}
                onClick={changeActiveState}
                onAdd={props.onAdd} />
        </>
    );
}

ButtonNewList.propTypes = {
    onAdd: PropTypes.func
};

export default ButtonNewList;
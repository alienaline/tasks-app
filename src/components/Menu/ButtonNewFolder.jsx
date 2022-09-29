/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'react-bootstrap/esm/Image';
import {AiOutlinePlus} from 'react-icons/ai';
import ModalNewFolder from './ModalNewFolder';

function ButtonNewFolder (props) {
    const [activeState, setActiveState] = useState(false);
    
    const changeActiveState = () => {
        setActiveState(prev => !prev);
    };

    return (
        <>
            <button className='createFolderButton buttonFolder'
                    onClick={() => changeActiveState()}>
                <AiOutlinePlus className='icon'/>
                New folder
            </button>
            <ModalNewFolder activeState={activeState}
                            onClick={changeActiveState}
                            onAdd={props.onAdd} />
        </>
    );
}

ButtonNewFolder.propTypes = {
    onAdd: PropTypes.func,
};

export default ButtonNewFolder;
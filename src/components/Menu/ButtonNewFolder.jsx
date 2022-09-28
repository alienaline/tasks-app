/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import ModalNewFolder from './ModalNewFolder';

function ButtonCreateFolder () {
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
                            onClick={changeActiveState} />
        </>
    );
}

export default ButtonCreateFolder;
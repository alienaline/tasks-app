/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import {CgClose} from 'react-icons/cg';
import PropTypes from 'prop-types';


function ModalNewFolder(props) {

    const [folderName, setFolderName] = useState('');
    const [color, setColor] = useState('gray');

    const setFolderNameHandler = (event) => {
        setFolderName(event.target.value);
    };

    const setColorHandler = (event) => {
        setColor(event.target.id);
    };

    const addFolder = () => {
        props.onAdd(folderName, color);
        setFolderName('');
        props.onClick();
    };

    const submitHandler = (event) => {
        event.preventDefault();
        addFolder();
    };

    return (
        <div className={`modal ${props.activeState ? 'active' : 'disabled'}`}>
            <div className="modalContent">
                <form className='modalForm'
                        onSubmit={submitHandler}>
                    <input type='text' 
                            className='modalInput' 
                            placeholder='Enter folder name'
                            value={folderName}
                            onChange={setFolderNameHandler} />
                    <ColorPicker value={color} onClick={setColorHandler} />
                    <button type='button' 
                            className='modalAddButton'
                            onClick={addFolder}>Add folder</button>
                </form>
                <button type='button' className='modalCloseButton'>
                    <CgClose className='modalCloseButtonIcon'
                            onClick={props.onClick} />
                </button>
            </div>
        </div>
    );
}

ModalNewFolder.propTypes = {
    activeState: PropTypes.bool,
    onClick: PropTypes.func,
    onAdd: PropTypes.func
};

export default ModalNewFolder;
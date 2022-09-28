/* eslint-disable no-unused-vars */
import React from 'react';
import ColorPicker from './ColorPicker';
import {CgClose} from 'react-icons/cg';
import PropTypes from 'prop-types';


function ModalNewFolder(props) {
    return (
        <div className={`modal ${props.activeState ? 'active' : 'disabled'}`}>
            <div className="modalContent">
                <form className='modalForm'>
                    <input type='text' className='modalInput' placeholder='Enter folder name' />
                    <ColorPicker />
                    <button type='button' className='modalAddButton'>Add folder</button>
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
};

export default ModalNewFolder;
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import {CgClose} from 'react-icons/cg';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addList } from '../../store/listsSlice/listsSlice';

function ModalNewList(props) {
    const [listName, setListName] = useState('');
    const [color, setColor] = useState('gray');
    const dispatch = useDispatch();

    const handleAddList = (event) => {
        event.preventDefault();
        if (listName.trim() == '') return false;
        dispatch(addList({listName, color}));
        setListName('');
        props.onClick();
    };

    return (
        <div 
            className='modal'
            data-state={props.activeState ? 'active' : 'disabled'}>
            <div className="modalContent">
                <form 
                    className='modalForm'
                    onSubmit={handleAddList}>
                    <input 
                        type='text' 
                        autoFocus
                        className='modalInput' 
                        placeholder='Enter list name'
                        value={listName}
                        onChange={(event) => setListName(event.target.value)} />
                    <ColorPicker 
                        value={color} 
                        onClick={(event) => setColor(event.target.id)} />
                    <button 
                        type='submit' 
                        className='modalAddButton'>
                        Add list
                    </button>
                </form>
                <button 
                    type='button' 
                    className='modalCloseButton'>
                    <CgClose 
                        className='modalCloseButtonIcon'
                        onClick={props.onClick} />
                </button>
            </div>
        </div>
    );
}

ModalNewList.propTypes = {
    activeState: PropTypes.bool,
    onClick: PropTypes.func,
    onAdd: PropTypes.func
};

export default ModalNewList;
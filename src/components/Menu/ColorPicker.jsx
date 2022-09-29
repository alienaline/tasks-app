import React from 'react';
import PropTypes from 'prop-types';

function ColorPicker(props) {
    return (
        <div className='colorPicker'>
            <input type='button' 
                    id='blue' 
                    className='colorPickerIcon blue'
                    onClick={props.onClick} />
            <input type='button' 
                    id='green' 
                    className='colorPickerIcon green'
                    onClick={props.onClick} />
            <input type='button' 
                    id='gray' 
                    className='colorPickerIcon gray'
                    onClick={props.onClick} />
            <input type='button' 
                    id='yellow' 
                    className='colorPickerIcon yellow'
                    onClick={props.onClick} />
            <input type='button' 
                    id='pink' 
                    className='colorPickerIcon pink'
                    onClick={props.onClick} />
            <input type='button' 
                    id='purple' 
                    className='colorPickerIcon purple'
                    onClick={props.onClick} />
            <input type='button' 
                    id='brown' 
                    className='colorPickerIcon brown'
                    onClick={props.onClick} />
            <input type='button' 
                    id='navy' 
                    className='colorPickerIcon navy'
                    onClick={() => props.onClick()} />
        </div>
    );
}

ColorPicker.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
};

export default ColorPicker;


import React from 'react';
import PropTypes from 'prop-types';
import { GoPrimitiveDot } from 'react-icons/go';

function ButtonFolder(props) {

    return (
        <button className='folderName'
            onClick={() => props.onClick(props.id)}>
            <GoPrimitiveDot className='icon'/>
            {props.folderName}
        </button>
    );
}

ButtonFolder.propTypes = {
    onClick: PropTypes.func,
    folderName: PropTypes.string,
    id: PropTypes.number,
};

export default ButtonFolder;
import React from 'react';
import PropTypes from 'prop-types';

function ButtonFolder(props) {

    return (
        <button className='folderName'
            onClick={() => props.onClick(props.id)}>
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
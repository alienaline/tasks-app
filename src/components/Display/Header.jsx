import React from 'react';
import PropTypes from 'prop-types';

function FolderHeader(props) {
    return (
        <h1 className='folderHeader'>
            { props.currentFolder ? props.currentFolder.folderName : 'hello world!' }
        </h1>
    );
}

FolderHeader.propTypes = {
    currentFolder: PropTypes.object,
};

export default FolderHeader;
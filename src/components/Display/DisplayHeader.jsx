import React from 'react';
import PropTypes from 'prop-types';

function FolderHeader(props) {
    return (
        <h1 className={`listHeader ${props.currentList ? props.currentList.color : ''}`}>
            { props.currentList ? props.currentList.listName : 'Welcome!' }
        </h1>
    );
}

FolderHeader.propTypes = {
    currentList: PropTypes.object,
};

export default FolderHeader;
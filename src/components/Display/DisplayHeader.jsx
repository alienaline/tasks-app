import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentList } from '../../store/listsSlice/listsSlice';

function FolderHeader() {
    const currentList = useSelector(selectCurrentList);

    return (
        <h1 className={`listHeader ${currentList ? currentList.color : ''}`}>
            { currentList.listName ? currentList.listName : 'Welcome!' }
        </h1>
    );
}

export default FolderHeader;
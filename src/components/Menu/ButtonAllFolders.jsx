import React from 'react';
import { CgDetailsMore } from 'react-icons/cg';

function ButtonAllFolders() {

    return (
        <button className='allFolderButton buttonFolder'>
            <CgDetailsMore className='icon'/>
            All Folders
        </button>
    );
}

export default ButtonAllFolders;
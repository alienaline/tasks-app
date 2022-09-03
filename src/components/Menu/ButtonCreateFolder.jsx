import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

function ButtonCreateFolder () {

    return (
        <button className='createFolderButton folderButton'>
            <AiOutlinePlus className='icon'/>
            New folder
        </button>
    );
}

export default ButtonCreateFolder;
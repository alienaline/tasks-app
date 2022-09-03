import React from 'react';
import FolderHeader from './FolderHeader';
import Comment from './Comment';
import { DisplayStyles } from '../../styles/Styles';

function Display() {
    return (
        <DisplayStyles>
            <div className='Display'>
                <FolderHeader />
                <Comment />
                <hr />
            </div>
        </DisplayStyles>
    );
}

export default Display;
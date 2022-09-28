/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonRemove from './ButtonRemove';
import ButtonCreateFolder from './ButtonNewFolder';
import ButtonFolder from './ButtonFolder';
import ButtonAllFolders from './ButtonAllFolders';
import { MenuStyles } from '../../styles/MenuStyles';

function Menu(props) {

    return (
        <MenuStyles>
            <div className="menu">
                <ButtonAllFolders />
                <ul>
                    {props.folders.map((item) => 
                        <li className='buttonFolder'
                            key={item.folderName}
                            id={item.id}>
                            <ButtonFolder 
                                id={item.id}
                                onClick={props.onClick}
                                folderName={item.folderName}/>
                            <ButtonRemove 
                                id={item.id}
                                onDelete={props.onDelete}/>
                        </li>
                    )}
                </ul>
                <ButtonCreateFolder />
            </div>
        </MenuStyles>
    );
}

Menu.propTypes = {
    folders: PropTypes.array,
    onDelete: PropTypes.func,
    onClick: PropTypes.func,
};

export default Menu;
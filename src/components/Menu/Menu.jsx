import React from 'react';
import PropTypes from 'prop-types';
import ButtonRemove from './ButtonRemove';
import ButtonCreateFolder from './ButtonCreateFolder';
import ButtonFolder from './ButtonFolder';
import { CgDetailsMore } from 'react-icons/cg';
import { MenuStyles } from '../../styles/MenuStyles';

function Menu(props) {

    return (
        <MenuStyles>
            <div className="menu">
                <button className='allFolderButton folderButton'>
                    <CgDetailsMore className='icon'/>
                    All Folders
                </button>
                <ul>
                    {props.folders.map((item) => 
                        <li className='folderButton'
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
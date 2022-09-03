import React from 'react';
import PropTypes from 'prop-types';
import ButtonRemove from './ButtonRemove';
import ButtonCreateFolder from './ButtonCreateFolder';
import { CgDetailsMore } from 'react-icons/cg';
import { MenuStyles } from '../../styles/Styles';


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
                            key={item.id}
                            id={item.id}>
                            <button className='folderName'>{item.folderName}</button>
                            <ButtonRemove 
                                key={item.id} 
                                onDelete={props.onDelete}
                                id={item.id}
                            />
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
    onDelete: PropTypes.func
};

export default Menu;
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonRemove from './ButtonRemove';
import ButtonNewList from './ButtonNewList';
import ButtonList from './ButtonList';
import { MenuStyles } from '../../styles/MenuStyles';

function Menu(props) {

    return (
        props.activeMenu &&
            <MenuStyles>
                <div className='menu'>
                    <h1 className='menuHeader'>Your lists</h1>
                    <ul>
                        {props.lists.map((item) => 
                            <li className='listButton'
                                key={item.id}
                                id={item.id}>
                                <ButtonList 
                                    id={item.id}
                                    onClick={props.onClick}
                                    listName={item.listName}
                                    color={item.color}
                                    />
                                <ButtonRemove 
                                    id={item.id}
                                    onDelete={props.onDelete}/>
                            </li>
                        )}
                    </ul>
                    <ButtonNewList onAdd={props.onAdd}/>
                </div>
            </MenuStyles>
    );
}

Menu.propTypes = {
    lists: PropTypes.array,
    onDelete: PropTypes.func,
    onClick: PropTypes.func,
    onAdd: PropTypes.func,
    activeMenu: PropTypes.bool,
};

export default Menu;
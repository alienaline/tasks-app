/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import ButtonRemove from './ButtonRemove';
import ButtonNewList from './ButtonNewList';
import ButtonList from './ButtonList';
import { MenuStyles } from '../../styles/MenuStyles';
import { useSelector } from 'react-redux';
import { selectLists } from '../../store/listsSlice/listsSlice';

function Menu(props) {
    const lists = useSelector(selectLists);

    return (
        props.activeMenu &&
            <MenuStyles>
                <div className={`menu ${ props.activeMenu ? 'showMenu' : 'hideMenu'}`}>
                    <h1 className='menuHeader'>Your lists</h1>
                    <ul>
                        {lists.map((item) => 
                            <li className='listButton'
                                key={item.id}
                                id={item.id}>
                                <ButtonList 
                                    id={item.id}
                                    listName={item.listName}
                                    color={item.color} />
                                <ButtonRemove 
                                    id={item.id} />
                            </li>
                        )}
                    </ul>
                    <ButtonNewList />
                </div>
            </MenuStyles>
    );
}

Menu.propTypes = {
    lists: PropTypes.array,
    activeMenu: PropTypes.bool,
};

export default Menu;
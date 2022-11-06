import React from 'react';
import PropTypes from 'prop-types';
import ButtonRemove from '../../components/Menu/ButtonRemove';
import ButtonNewList from '../../components/Menu/ButtonNewList';
import ButtonList from '../../components/Menu/ButtonList';
import { MenuStyles } from './MenuStyles';
import { useSelector } from 'react-redux';
import { selectLists } from '../../store/listsSlice/listsSlice';

function Menu(props) {
    const lists = useSelector(selectLists);

    return (
        props.activeMenu &&
            <MenuStyles>
                <div className='menu'>
                    <h1 className='menuHeader'>Your lists</h1>
                    <ul className='menuLists'>
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
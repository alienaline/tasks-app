import React from 'react';
import { HeaderStyles } from '../../styles/HeaderStyles';
import {AiOutlineMenu} from 'react-icons/ai';

function Header() {
    return (
        <HeaderStyles>
            <div className='menu'>
                <button type='button'
                        className='menuButton'>
                        <AiOutlineMenu className='icon' />
                </button>
            </div>
        </HeaderStyles>
    );
}

export default Header;
import React from 'react';
import { HeaderStyles } from '../../styles/HeaderStyles';

function Header() {
    return (
        <HeaderStyles>
            <div className='menu'>
                <button type='button'
                        className='menuButton'>
                        Menu
                </button>
            </div>
        </HeaderStyles>
    );
}

export default Header;
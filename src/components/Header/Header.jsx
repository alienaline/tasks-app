import React from 'react';
import { HeaderStyles } from '../../styles/HeaderStyles';
import {AiOutlineMenu} from 'react-icons/ai';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <HeaderStyles>
            <div className='menu'>
                <button 
                    type='button'
                    className='menuButton'
                    onClick={() => props.onClick()} >
                    <AiOutlineMenu className='icon' />
                </button>
            </div>
        </HeaderStyles>
    );
}

Header.propTypes = {
    onClick: PropTypes.func
};

export default Header;
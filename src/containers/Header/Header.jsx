import React from 'react';
import { HeaderStyles } from './HeaderStyles';
import {AiOutlineMenu} from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <HeaderStyles>
            <div className='menu'>
                <button 
                    type='button'
                    className='menuButton'
                    onClick={() => props.onClick()} >
                    {props.activeMenu ? <BsArrowLeft className='icon' /> : <AiOutlineMenu className='icon' />}
                </button>
            </div>
        </HeaderStyles>
    );
}

Header.propTypes = {
    onClick: PropTypes.func,
    activeMenu: PropTypes.bool
};

export default Header;
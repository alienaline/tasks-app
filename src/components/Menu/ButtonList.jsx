import React from 'react';
import PropTypes from 'prop-types';

function ButtonList(props) {

    return (
        <button className='listName'
            onClick={() => props.onClick(props.id)}>
            <span className={`listColorIcon icon ${props.color}`}/>
            {props.listName}
        </button>
    );
}

ButtonList.propTypes = {
    onClick: PropTypes.func,
    listName: PropTypes.string,
    id: PropTypes.number,
    color: PropTypes.string
};

export default ButtonList;
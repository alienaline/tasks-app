import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
    const [date, setDate] = useState('');
    const [comment, setComment] = useState('');

    const changeComment = (event) => {
        let today = new Date();
        today = today.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
        setDate(today);
        setComment(event.target.value);
    };

    return (
        <div className={`comment ${props.currentFolder ? 'active' : 'disabled'}`}>
            <p className='commentText'>
                {comment}
            </p>
            <input 
                type='text'
                maxLength={100} 
                className='commentInput'
                placeholder='write a comment'
                onSubmit={() => changeComment()}>
            </input>
            <p className='commentDate'>{date}</p>
        </div>
    );
}

Comment.propTypes = {
    currentFolder: PropTypes.object
};

export default Comment;
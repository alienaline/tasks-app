import React from 'react';
import { useState } from 'react';

function Comment() {
    const [date, setDate] = useState('');
    const [comment, setComment] = useState('');

    const changeComment = (event) => {
        let today = new Date();
        today = today.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
        setDate(today);
        setComment(event.target.value);
    };

    return (
        <div className='comment'>
            <p className='commentText'>
                {comment}
            </p>
            <input 
                type='text'
                maxLength={65} 
                className='commentInput'
                placeholder='write a comment'
                onSubmit={() => changeComment()}>
            </input>
            <p className='commentDate'>{date}</p>
        </div>
    );
}

export default Comment;
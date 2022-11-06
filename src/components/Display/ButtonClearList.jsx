import React from 'react';
import { selectCurrentList } from '../../store/listsSlice/listsSlice';
import { deleteAllTasks} from '../../store/tasksSlice/tasksSlice';
import { AiOutlineClear } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

function ButtonClearList() {
    const dispatch = useDispatch();
    const currentList = useSelector(selectCurrentList);

    return (
        <button
            className='buttonClear'
            onClick={() => dispatch(deleteAllTasks(currentList.id))}>
            <AiOutlineClear className='icon'/>
            Clear list
        </button>
    );
}

export default ButtonClearList;
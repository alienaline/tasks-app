/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './listsSlice/listsSlice';
import tasksReducer from './tasksSlice/tasksSlice';

export default configureStore({
    reducer: {
        lists: listsReducer,
        tasks: tasksReducer
    }
});

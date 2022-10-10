import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            const lastId = state.tasks.length ? (state.tasks[state.tasks.length - 1].id + 1) : 0;
            state.tasks = [
                ...state.tasks, 
                {'id': lastId, 'listId': action.payload.listId, 'text': action.payload.text, state: false}
            ];
        },

        toggleTask: (state) => {
            state.tasks = [...state.tasks];
        },

        deleteTasks: (state, action) => {
            state.tasks = [...state.tasks.filter((item) => item.listId !== action.payload.id)];
        }
    }
});

export const selectTasks = state => state.tasks.tasks;
export const { addTask, toggleTask, deleteTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
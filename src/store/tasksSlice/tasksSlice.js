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
                {'id': lastId, 'listId': action.payload.listId, 'text': action.payload.text, completed: false}
            ];
        },

        toggleTask: (state, action) => {
            state.tasks = state.tasks.map((item) => 
                item.id == action.payload ? {...item, completed: !item.completed} : item
            );
        },

        deleteTask: (state, action) => {
            state.tasks = [...state.tasks.filter((item) => item.id !== action.payload)];
        },

        deleteAllTasks: (state, action) => {
            state.tasks = [...state.tasks.filter((item) => item.listId !== action.payload)];
        }
    }
});

export const selectTasks = state => state.tasks.tasks;
export const { addTask, toggleTask, deleteAllTasks, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
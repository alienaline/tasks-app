import { createSlice } from '@reduxjs/toolkit';

const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: [],
        currentList: {}
    },
    reducers: {
        addList: (state, action) => {
            const lastId = state.lists.length ? (state.lists[state.lists.length - 1].id + 1) : 0;

            state.lists = [
                ...state.lists,
                {id: lastId, listName: action.payload.listName, color: action.payload.color}
            ];
        },

        deleteList: (state, action) => {
            state.lists = [...state.lists.filter((list) => list.id !== action.payload)];
        },

        setCurrentList: (state, action) => {
           state.currentList = {id: action.payload.id, listName: action.payload.listName, color: action.payload.color};
        },

        clearCurrentList: (state) => {
            state.currentList = {};
        }
    }
});

export const selectLists = state => state.lists.lists;
export const selectCurrentList = state => state.lists.currentList;
export const { addList, deleteList, setCurrentList, clearCurrentList  } = listsSlice.actions;
export default listsSlice.reducer;
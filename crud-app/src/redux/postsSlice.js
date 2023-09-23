import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        items: []
    },
    reducers: {
        addPost: (state, action) => {
            if (action.payload.title.length > 0 && action.payload.desc.length > 0) {
                state.items.push(action.payload);
            }
        },
        deletePost: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        editPost: (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title;
                    item.desc = action.payload.desc;
                }
            })
        }
    }
})

export const { addPost, deletePost, editPost } = postsSlice.actions;
export default postsSlice.reducer
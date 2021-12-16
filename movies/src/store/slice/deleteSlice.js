import { createSlice } from '@reduxjs/toolkit'

const deleteSlice = createSlice({
    name: "delete",
    initialState: {
        isOpen: false,
        movieToDelete: undefined
    },
    reducers: {
        SET_IS_OPEN: (state, action) => {
            state.isOpen = action.payload
        },
        SET_MOVIE_TO_DELETE: (state, action) => {
            state.movieToDelete = action.payload
        }
    }
})

export const { SET_IS_OPEN, SET_MOVIE_TO_DELETE } = deleteSlice.actions

export default deleteSlice.reducer

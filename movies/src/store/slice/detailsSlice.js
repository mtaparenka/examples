import { createSlice } from '@reduxjs/toolkit'

const detailsSlice = createSlice({
    name: "details",
    initialState: {
        isOpen: false,
        selectedMovie: {}
    },
    reducers: {
        SET_IS_OPEN: (state, action) => {
            state.isOpen = action.payload
        },
        SET_SELECTED_MOVIE: (state, action) => {
            state.selectedMovie = action.payload
        },
    }
})

export const { SET_IS_OPEN, SET_SELECTED_MOVIE } = detailsSlice.actions

export default detailsSlice.reducer

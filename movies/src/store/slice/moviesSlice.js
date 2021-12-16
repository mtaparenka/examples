import { createSlice } from '@reduxjs/toolkit'
import { deleteMovie, getMovies } from '../../client/apiClient'

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        data: getMovies()
    },
    reducers: {
        SET_DATA: (state, action) => {
            state.data = action.payload
        },
        DELETE_MOVIE: (state, action) => {
            deleteMovie(action.payload)
            state.data = getMovies()
        }
    }
})

export const { SET_DATA, DELETE_MOVIE } = moviesSlice.actions

export default moviesSlice.reducer

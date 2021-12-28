import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteMovie, getMovies } from '../../client/apiClient'

export const FETCH_MOVIES = createAsyncThunk("fetchMovies", async () => {
    const response = await getMovies()

    return response.data
})

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        data: [],
        status: "pending"
    },
    reducers: {
        SET_DATA: (state, action) => {
            state.data = action.payload
        },
        DELETE_MOVIE: (state, action) => {
            deleteMovie(action.payload)
            state.data = getMovies()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FETCH_MOVIES.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = "loaded"
        })
    }
})

export const { SET_DATA, DELETE_MOVIE } = moviesSlice.actions

export default moviesSlice.reducer

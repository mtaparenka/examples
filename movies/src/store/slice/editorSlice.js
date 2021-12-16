import { createSlice } from '@reduxjs/toolkit'
import { getGenres } from '../../client/apiClient'

const editorSlice = createSlice({
    name: "editor",
    initialState: {
        isOpen: false,
        isEdit: false,
        title: "add movie",
        genres: getGenres(),
        data: {
        }
    },
    reducers: {
        SET_IS_OPEN: (state, action) => {
            state.isOpen = action.payload
        },
        OPEN_EDITOR: (state, action) => {
            state.isOpen = action.payload.isOpen == null ? state.isOpen : action.payload.isOpen
            state.isEdit = action.payload.isEdit == null ? state.isEdit : action.payload.isEdit
            state.title = action.payload.title == null ? state.title : action.payload.title
            state.data = action.payload.data == null ? state.data : action.payload.data
        }
    }
})

export const { SET_IS_OPEN, OPEN_EDITOR } = editorSlice.actions

export default editorSlice.reducer

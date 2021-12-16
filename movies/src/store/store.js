import { configureStore } from '@reduxjs/toolkit'
import deleteReducer from './slice/deleteSlice'
import detailsReducer from './slice/detailsSlice'
import editorReducer from './slice/editorSlice'
import moviesReducer from './slice/moviesSlice'

export default configureStore({
  reducer: {
    movies: moviesReducer,
    editor: editorReducer,
    delete: deleteReducer,
    details: detailsReducer
  }
})

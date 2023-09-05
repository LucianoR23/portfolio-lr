import { configureStore } from '@reduxjs/toolkit'
import { viewsSlice } from './views/viewsSlice'


export const store = configureStore({
    reducer: {
        views: viewsSlice.reducer
    },
})
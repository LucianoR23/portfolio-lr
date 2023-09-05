import { createSlice } from "@reduxjs/toolkit";


export const viewsSlice = createSlice({
    name: 'views',
    initialState: {
        isScrollActive: false
    },
    reducers: {
        activateScroll: (state) => {
            state.isScrollActive = true
        },
        disableScroll: (state) => {
            state.isScrollActive = false
        }
    }
})

export const {activateScroll, disableScroll } = viewsSlice.actions;
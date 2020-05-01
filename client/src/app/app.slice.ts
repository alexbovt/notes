import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type AppState = {
    title: string
    isLoading: boolean
}

const initialState: AppState = {
    //#TODO get app name from .env
    title: 'Notes',
    isLoading: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        progressStared: (state: AppState) => {
            state.isLoading = true
        },
        progressEnded: (state: AppState) => {
            state.isLoading = false
        }
    },
})

export const {reducer: appReducer} = appSlice
export const {progressStared, progressEnded} = appSlice.actions

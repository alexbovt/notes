import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {getRouteName} from "../shared/utils/route.utils";
import {capitalizeFirst} from "../shared/utils/text.utils";

export type ToastState = {
    message: string
    type: 'error' | 'success' | 'info' | 'warning'
}

export type AppState = {
    name: string
    title: string
    isLoading: boolean
    toast: ToastState
}

//#TODO get app name from .env
const APP_NAME = 'Notes'
const SEPARATOR = ' | '

const toastInitialState: ToastState = {
    message: '',
    type: 'info'
}

const initialState: AppState = {
    name: APP_NAME,
    title: APP_NAME,
    isLoading: false,
    toast: toastInitialState
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        titleSet: (state: AppState, action: PayloadAction<string>) => {
            const routeName = getRouteName(action.payload)
            const tabName = routeName.length > 0 ? SEPARATOR + capitalizeFirst(routeName) : ''
            state.title = APP_NAME + tabName
        },
        progressStared: (state: AppState) => {
            state.isLoading = true
        },
        progressEnded: (state: AppState) => {
            state.isLoading = false
        },
        setToast: (state: AppState, action: PayloadAction<ToastState>) => {
            state.toast = action.payload
        },
        clearToast: (state: AppState) => {
            state.toast = toastInitialState
        }
    },
})

export const {reducer: appReducer} = appSlice
export const {progressStared, progressEnded, titleSet, setToast,  clearToast} = appSlice.actions

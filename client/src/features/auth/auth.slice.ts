import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type User = {
    readonly _id: string
    readonly login: string
    readonly name: string
    readonly email: string
}

export type AuthState = {
    isAuthenticated: boolean | null
    user: User | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedIn: (state: AuthState, action: PayloadAction<User>) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
        registered: (state: AuthState, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        loggedOut: (state: AuthState) => {
            state.user = null
            state.isAuthenticated = false
        }
    },
})

export const {reducer: authReducer} = authSlice
export const {registered, loggedIn, loggedOut} = authSlice.actions

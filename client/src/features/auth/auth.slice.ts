import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type User = {
    readonly login: string
    readonly name: string
    readonly email: string
}

export type AuthState = {
    isAuthenticated: boolean
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
        registered: (state: AuthState, action: PayloadAction<User>) => {
            state.user = action.payload
        },
    },
})

export const {reducer: authReducer} = authSlice
export const {registered} = authSlice.actions

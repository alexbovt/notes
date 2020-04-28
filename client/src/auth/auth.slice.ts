import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../todo/todo.model'

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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registered: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  },
})

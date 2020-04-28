import { combineReducers } from '@reduxjs/toolkit'

import { authSlice } from './auth/auth.slice';
import { todosSlice } from './todo/todos.slice'

export const appReducer = combineReducers({
  auth: authSlice.reducer,
  todo: todosSlice.reducer,
})

export type ApplicationState = ReturnType<typeof appReducer>

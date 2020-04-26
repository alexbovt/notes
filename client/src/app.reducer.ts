import { combineReducers } from '@reduxjs/toolkit'

import todosSlice from './todo/todos.slice'

export const appReducer = combineReducers({
  todo: todosSlice.reducer,
})

export type ApplicationState = ReturnType<typeof appReducer>

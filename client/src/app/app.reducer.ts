import {combineReducers} from '@reduxjs/toolkit'

import {authReducer} from '../features/auth/auth.slice';
import {todosReducer} from '../features/todo/todos.slice'

export const appReducer = combineReducers({
    auth: authReducer,
    todo: todosReducer
})

export type ApplicationState = ReturnType<typeof appReducer>

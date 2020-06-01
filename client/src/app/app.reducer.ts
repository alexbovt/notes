import {combineReducers} from '@reduxjs/toolkit'

import {authReducer} from '../features/auth/auth.slice';
import {todosReducer} from '../features/todo/todos.slice'
import {appReducer} from './app.slice'

export const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    todo: todosReducer,
})

export type ApplicationState = ReturnType<typeof rootReducer>

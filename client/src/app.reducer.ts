import {combineReducers} from '@reduxjs/toolkit';

import {todosSlice} from './todo/todos.slice';

export const appReducer =  combineReducers({
    todos: todosSlice.reducer
})

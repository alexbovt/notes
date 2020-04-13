import {createAction} from '@reduxjs/toolkit';
import {TodoAction} from './todo.constants';

import {Todo} from './todo.model';

export const getTodos = createAction<Todo[]>(TodoAction.GET_TODOS);
export const addTodo = createAction<Todo>(TodoAction.ADD_TODO);
export const deleteTodo = createAction<Todo>(TodoAction.DELETE_TODO);
export const updateTodo = createAction<Todo>(TodoAction.UPDATE_TODO);


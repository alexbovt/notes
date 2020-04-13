import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addTodo, deleteTodo, getTodos, updateTodo} from "./todo.actions";

export type TodoState = {}

const initialState: TodoState = {}


export const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        [getTodos.type]: () => {
        },
        [addTodo.type]: () => {
        },
        [deleteTodo.type]: () => {
        },
        [updateTodo.type]: () => {
        },
    }
});

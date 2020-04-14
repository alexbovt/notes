import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Todo} from './todo.model';

export type TodoState = {
    todos: Todo[]
}

const initialState: TodoState = {
    todos: []
};

const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todosRecived: (state: TodoState, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload;
        },
        todoAdded: (state: TodoState, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        todoUpdated: (state: TodoState, action: PayloadAction<Todo>) => {
            const idx = state.todos.findIndex(x => x._id === action.payload._id);
            if (idx !== -1) {
                state.todos[idx] = action.payload
            }
        },
        todoDeleted: (state: TodoState, action: PayloadAction<Todo>) => {
            state.todos = state.todos.filter(x => x._id !== action.payload._id);
        }
    }
});

export default todosSlice;

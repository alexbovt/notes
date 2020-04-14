import React, {useEffect} from 'react'

import {CreateTodoDTO, Todo} from './todo.model';
import {addTodo, deleteTodo, fetchTodos, updateTodo} from './todo.actions';
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../app.reducer";


export const Todos = (): JSX.Element => {

    const todos = useSelector((state: ApplicationState) => state.todo.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch]);

    const handleAddTodo = async (): Promise<void> => {
        const createTodoDTO: CreateTodoDTO = {
            title: 'Add React to Project',
            author: 'Alex',
            date: new Date().toLocaleString(),
            isDone: false
        };
        dispatch(addTodo(createTodoDTO))
    };

    const handleDeleteTodo = async (todo: Todo) => {
        dispatch(deleteTodo(todo))
    };

    const handleToggle = async (todo: Todo) => {
        dispatch(updateTodo({
            ...todo,
            isDone: !todo.isDone
        }));
    };

    return (
        <>
            <div>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            {Array.isArray(todos) && todos.length > 0 && <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        <span style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}
                              onClick={() => handleToggle(todo)}>{todo._id + ' ' + todo.title}</span>
                        {'  '}
                        <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
                    </li>
                ))}
            </ul>}
        </>
    )
};

import React, {useEffect, useState} from 'react'

import {CreateTodoDTO} from '../../../shared/dto/todo/create-todo.dto';
import {TodoService} from "./todo.service";
import {useSnackBar} from "../shared/snackbar/snackbar-provider";

export interface Todo {
    readonly _id: string
    readonly title: string
    readonly isDone: boolean
    readonly author: string
    readonly date: string
}

export const Todos = (): JSX.Element => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const {addToast} = useSnackBar();

    useEffect(() => {
        const getTodos = async () => {
            const {data} = await TodoService.GetAll();

            setTodos(data)
        };

        getTodos()
    }, []);

    const handleAddTodo = async (): Promise<void> => {
        const createTodoDTO: CreateTodoDTO = {
            title: 'Add Mongo to Project',
            author: 'Alex',
            date: new Date().toLocaleString(),
            isDone: false
        };

        const {data} = await TodoService.Add(createTodoDTO);

        setTodos(todos => [...todos, data.todo]);
    };

    const handleDeleteTodo = async (id: string) => {
        const {data} = await TodoService.Delete(id);

        addToast({message: data.message});

        setTodos(todos => todos.filter(x => x._id !== data.todo._id))
    };

    const handleToggle = async (id: string) => {
        const idx = todos.findIndex(x => x._id === id);

        if (idx !== -1) {
            const todo = todos[idx];

            const newTodo: CreateTodoDTO = {
                title: todo.title,
                date: todo.date,
                author: todo.author,
                isDone: !todo?.isDone
            };
            const {data} = await TodoService.Update(id, newTodo);

            addToast({message: data.message});

            setTodos(todos => ([
                ...todos.slice(0, idx),
                data.todo,
                ...todos.slice(idx + 1)
            ]));
        }
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
                              onClick={() => handleToggle(todo._id)}>{todo.title}</span>
                        {'  '}
                        <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>}
        </>
    )
};

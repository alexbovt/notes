import React, {useEffect, useState} from 'react'

import {CreateTodoDTO} from '../../../shared/dto/todo/create-todo.dto';
import {TodoService} from "./todo.service";

export interface Todo {
    readonly _id: string
    readonly title: string
    readonly isDone: boolean
    readonly author: string
    readonly date: string
}

export const Todos = (): JSX.Element => {
    const [todos, setTodos] = useState<Todo[]>([]);

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

        setTodos(todos => todos.filter(x => x._id !== data.todo._id))
    };

    return (
        <>
            <div>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            {Array.isArray(todos) && todos.length > 0 && <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        <span>{todo.title}</span>
                        <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>}
        </>
    )
};

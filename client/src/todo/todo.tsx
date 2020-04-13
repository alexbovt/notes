import React, {useEffect, useState} from 'react'

import {CreateTodoDTO} from '../../../shared/dto/todo/create-todo.dto';
import {TodoService} from "./todo.service";

export type Todo = {
    title: string,
    isDone: boolean,
    author: string;
    date: string
}

export const Todo = (): JSX.Element => {
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

        setTodos(todos => [...todos, data]);
    };

    return (
        <>
            <div>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            {Array.isArray(todos) && todos.length > 0 && <ul>
                {todos.map(todo => <li>{todo.title}</li>)}
            </ul>}
        </>
    )
};

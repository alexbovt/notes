import React, {useEffect, useState} from 'react'

import {CreateTodoDTO} from '../../../../shared/dto/todo/create-todo.dto';

type Todo = {
    title: string,
    isDone: boolean,
    author: string;
    date: string
}

export const Todo = (): JSX.Element => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const getTodos = async () => {
            const response: Response = await fetch('http://localhost:4200/todo/getAll', {method: 'GET'});
            const todos = await response.json();
            setTodos(todos)
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

        const response: Response = await fetch('http://localhost:4200/todo/create', {
            method: 'POST',
            body: JSON.stringify(createTodoDTO)
        });

        const newTodo = await response.json();

        setTodos(todos => [...todos, newTodo]);
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

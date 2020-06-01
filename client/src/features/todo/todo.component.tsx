import React, { useEffect, useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { CreateTodoDTO, Todo } from './todo.model'
import { addTodo, deleteTodo, fetchTodos, updateTodo } from './todo.actions'
import { ApplicationState } from '../../app/app.reducer'

export const Todos = (): JSX.Element => {
  const todos = useSelector<ApplicationState>((state) => state.todo.todos)
  const dispatch = useDispatch()

  const [newTodo, setNewTodo] = useState<string>('')

  const handleNewTodoChage = (event: ChangeEvent<HTMLInputElement>) => setNewTodo(event.target.value)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const handleAddTodo = async (): Promise<void> => {
    const createTodoDTO: CreateTodoDTO = {
      title: newTodo,
      author: 'Alex',
      date: new Date().toLocaleString(),
      isDone: false,
    }
    dispatch(addTodo(createTodoDTO))
  }

  const handleDeleteTodo = async (todo: Todo) => {
    dispatch(deleteTodo(todo))
  }

  const handleToggle = async (todo: Todo) => {
    dispatch(
      updateTodo({
        ...todo,
        isDone: !todo.isDone,
      }),
    )
  }

  return (
    <>
      <div>
        <Link to={'/'}>Hello</Link>
      </div>
      <div>
        <input type="text" value={newTodo} onChange={handleNewTodoChage} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      {Array.isArray(todos) && todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>
              <span
                style={{
                  textDecoration: todo.isDone ? 'line-through' : 'none',
                }}
                onClick={() => handleToggle(todo)}
              >
                {todo.title}
              </span>
              {'  '}
              <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

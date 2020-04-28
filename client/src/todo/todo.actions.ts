import { AppDispatch, AppThunk } from '../app.store'
import { todosSlice } from './todos.slice'
import { CreateTodoDTO, Todo } from './todo.model'
import { todoService } from './todo.service'

const getCreateTodoDTO = ({ title, author, date, isDone }: Todo): CreateTodoDTO => ({
  title,
  author,
  date,
  isDone,
})

const { todoAdded, todosRecived, todoUpdated, todoDeleted } = todosSlice.actions

export const fetchTodos = (): AppThunk => async (dispatch: AppDispatch) => {
  const { data } = await todoService.getAll()

  dispatch(todosRecived(data))
}

export const addTodo = (newTodo: CreateTodoDTO): AppThunk => async (dispatch: AppDispatch) => {
  const { data } = await todoService.add(newTodo)

  dispatch(todoAdded(data.todo))
}

export const updateTodo = (todo: Todo): AppThunk => async (dispatch: AppDispatch) => {
  const { data } = await todoService.update(todo._id, getCreateTodoDTO(todo))

  dispatch(todoUpdated(data.todo))
}

export const deleteTodo = (todo: Todo): AppThunk => async (dispatch: AppDispatch) => {
  const { data } = await todoService.delete(todo._id)

  dispatch(todoDeleted(data.todo))
}

import {AppDispatch, AppThunk} from '../app.store';
import {TodoService} from './todo.service';
import todosSlice from './todos.slice';
import {CreateTodoDTO, Todo} from './todo.model';

const getCreateTodoDTO = ({title, author, date, isDone}: Todo): CreateTodoDTO => ({title, author, date, isDone});

export const fetchTodos = (): AppThunk => async (dispatch: AppDispatch) => {
    const {data} = await TodoService.GetAll();

    dispatch(todosSlice.actions.todosRecived(data))
};

export const addTodo = (newTodo: CreateTodoDTO): AppThunk => async (dispatch: AppDispatch) => {
    const {data} = await TodoService.Add(newTodo);

    dispatch(todosSlice.actions.todoAdded(data.todo));
};

export const updateTodo = (todo: Todo): AppThunk => async (dispatch: AppDispatch) => {
    const {data} = await TodoService.Update(todo._id, getCreateTodoDTO(todo));

    dispatch(todosSlice.actions.todoUpdated(data.todo));
};

export const deleteTodo = (todo: Todo): AppThunk => async (dispatch: AppDispatch) => {
    const {data} = await TodoService.Delete(todo._id);

    dispatch(todosSlice.actions.todoDeleted(data.todo));
};

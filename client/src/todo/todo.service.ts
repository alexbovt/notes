import axios, {AxiosResponse} from 'axios'

import {CreateTodoDTO} from '../../../api/src/todo/dto/create-todo.dto';
import {Todo} from "./todo.model";

type TodoResponse = {
    message: string,
    todo: Todo
}

export class TodoService {
    private static readonly baseUrl = 'http://localhost:4200/todo/';

    public static Add(createTodoDTO: CreateTodoDTO): Promise<AxiosResponse<TodoResponse>> {
        return axios.post(this.baseUrl + 'create', createTodoDTO);
    }

    public static GetAll(): Promise<AxiosResponse<Todo[]>> {
        return axios.get(this.baseUrl + 'getAll');
    }

    public static Delete(id: string): Promise<AxiosResponse<TodoResponse>> {
        return axios.delete(`${this.baseUrl}delete?todoId=${id}`);
    }

    public static Update(id: string, newTodo: CreateTodoDTO): Promise<AxiosResponse<TodoResponse>> {
        return axios.put(`${this.baseUrl}edit?todoId=${id}`, newTodo);
    }
}

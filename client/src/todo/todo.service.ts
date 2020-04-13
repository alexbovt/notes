import axios, {AxiosResponse} from 'axios'

import {CreateTodoDTO} from '../../../shared/dto/todo/create-todo.dto';
import {Todo} from "./todo";

export class TodoService {
    private static readonly baseUrl = 'http://localhost:4200/';

    public static Add(createTodoDTO: CreateTodoDTO): Promise<AxiosResponse<Todo>> {
        return axios.post(this.baseUrl + 'crate', createTodoDTO);
    }

    public static GetAll(): Promise<AxiosResponse<Todo[]>> {
        return axios.get(this.baseUrl + 'getAll');
    }
}

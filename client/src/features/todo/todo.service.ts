import {Todo, CreateTodoDTO} from './todo.model'
import {BaseService, ServiceResponse} from '../../shared/base.service'

type TodoResponse = {
    message: string
    todo: Todo
}

class TodoService extends BaseService {
    protected controller: string = 'todo'

    public add(createTodoDTO: CreateTodoDTO): Promise<ServiceResponse<TodoResponse>> {
        return this.invoke<TodoResponse>({
            method: 'post',
            url: 'create',
            data: createTodoDTO,
        })
    }

    public getAll(): Promise<ServiceResponse<Todo[]>> {
        return this.invoke<Todo[]>({
            url: 'getAll',
        })
    }

    public delete(id: string): Promise<ServiceResponse<TodoResponse>> {
        return this.invoke<TodoResponse>({
            method: 'delete',
            url: `delete?todoId=${id}`,
        })
    }

    public update(id: string, newTodo: CreateTodoDTO): Promise<ServiceResponse<TodoResponse>> {
        return this.invoke<TodoResponse>({
            url: `edit?todoId=${id}`,
            method: 'put',
            data: newTodo,
        })
    }
}

export const todoService = new TodoService()

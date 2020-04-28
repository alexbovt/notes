import { AxiosResponse } from 'axios'

import { Todo, CreateTodoDTO } from './todo.model'
import { BaseService } from '../shared/base.service'

type TodoResponse = {
  message: string
  todo: Todo
}

class TodoService extends BaseService {
  protected controller: string = 'todo'

  public add(createTodoDTO: CreateTodoDTO): Promise<AxiosResponse<TodoResponse>> {
    return this.invoke<TodoResponse>({
      method: 'post',
      url: 'create',
      data: createTodoDTO,
    })
  }

  public getAll(): Promise<AxiosResponse<Todo[]>> {
    return this.invoke<Todo[]>({
      url: 'getAll',
    })
  }

  public delete(id: string): Promise<AxiosResponse<TodoResponse>> {
    return this.invoke<TodoResponse>({
      method: 'delete',
      url: `delete?todoId=${id}`,
    })
  }

  public update(id: string, newTodo: CreateTodoDTO): Promise<AxiosResponse<TodoResponse>> {
    return this.invoke<TodoResponse>({
      url: `edit?todoId=${id}`,
      method: 'put',
      data: newTodo,
    })
  }
}

export const todoService = new TodoService()

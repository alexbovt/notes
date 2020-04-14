import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {Todo} from './interfaces/todo.interface';
import {CreateTodoDTO} from './dto/create-todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectModel('Todo') private readonly model: Model<Todo>) {
    }

    public async add(createTodoDTO: CreateTodoDTO): Promise<Todo> {
        const newTodo = await new this.model(createTodoDTO);
        return newTodo.save();
    }

    public async getById(id: number): Promise<Todo> {
        const todo = await this.model.findById(id).exec();
        return todo;
    }

    public async getAll(): Promise<Todo[]> {
        const todos = await this.model.find().exec();
        return todos;
    }

    public async edit(id: Pick<Todo, 'id'>, createTodoDTO: CreateTodoDTO): Promise<Todo> {
        const todo = await this.model.findByIdAndUpdate(id, createTodoDTO, {new: true});
        return todo
    }

    public async delete(id: Pick<Todo, 'id'>): Promise<Todo> {
        const todo = await this.model.findOneAndRemove(id);
        return todo;
    }
}

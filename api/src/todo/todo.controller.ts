import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    NotFoundException,
    Param,
    Post,
    Put,
    Query,
    Res
} from '@nestjs/common';

import {TodoService} from './todo.service';
import {CreateTodoDTO} from "../../../shared/dto/todo/create-todo.dto";
import {ValidateObjectId} from '../shared/pipes/validate-object-id.pipe';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {
    }

    @Post('/create')
    public async create(@Res() response, @Body() createTodoDTO: CreateTodoDTO): Promise<Response> {
        const todo = await this.todoService.add(createTodoDTO);

        return response.status(HttpStatus.OK).json({
            message: "Todo has been submitted successfully !",
            todo
        });
    }

    @Get('/get/:todoId')
    public async get(@Res() response, @Param('todoId', new ValidateObjectId()) todoId): Promise<Response> {
        const todo = await this.todoService.getById(todoId);
        if (!todo) {
            throw new NotFoundException('Todo does not exist !')
        }

        return response.status(HttpStatus.OK).json(todo)
    }

    @Get('/getAll')
    public async getAll(@Res() response): Promise<Response> {
        const todos = await this.todoService.getAll();

        return response.status(HttpStatus.OK).json(todos);
    }

    @Put('/edit')
    public async edit(
        @Res() response,
        @Query('postId', new ValidateObjectId()) todoId,
        @Body()createTodoDTO: CreateTodoDTO
    ): Promise<Response> {
        const todo = await this.todoService.edit(todoId, createTodoDTO);
        if (!todo) {
            throw new NotFoundException('Todo does not exist !');
        }

        return response.status(HttpStatus.OK).json({
            message: 'Todo has been successfully updated !',
            todo
        });
    }

    @Delete('/delete')
    public async delete(@Res() response, @Query('todoId', new ValidateObjectId()) todoId): Promise<Response> {
        const todo = await this.todoService.delete(todoId);
        if (!todo) {
            throw new NotFoundException('Todo does not exist !');
        }

        return response.status(HttpStatus.OK).json({
            message: 'Todo has been deleted !',
            todo
        });
    }
}

import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {TodoService} from './todo.service';
import {TodoController} from './todo.controller';
import {TodoSchema} from './schemas/todo.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Todo', schema: TodoSchema}])
    ],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoModule {
}

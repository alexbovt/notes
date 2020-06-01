import { DB_FEATURES_NAMES } from './../db/db.constants'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { TodoService } from './todo.service'
import { TodoController } from './todo.controller'
import { TodoSchema } from '../db/schemas/todo.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: DB_FEATURES_NAMES.Todo, schema: TodoSchema }])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}

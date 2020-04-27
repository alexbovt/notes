import { DB_FEATURES_NAMES } from './../db/db.constants'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersService } from './users.service'
import { UserSchema } from '../db/schemas/user.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DB_FEATURES_NAMES.Users, schema: UserSchema }]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

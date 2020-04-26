import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'

import { CreateUserDTO } from './dto/create-user.dto'
import { User } from './intefaces/user.inteface'

const SALT_ROUNDS = 10

@Injectable()
export class UsersService {
  constructor(@InjectModel('Todo') private readonly model: Model<User>) {}

  public async add(createUserDTO: CreateUserDTO): Promise<User> {
    const hash = await bcrypt.hash(createUserDTO.password, SALT_ROUNDS)

    const userToSave: CreateUserDTO = {
      ...createUserDTO,
      password: hash,
    }

    const newUser = await new this.model(userToSave)

    return newUser.save()
  }

  public async findOne(login: string): Promise<User | undefined> {
    const user = await this.model.findOne({ login })

    return user
  }

  public async validatePassword(user: User, password: string): Promise<boolean> {
    if (!user) return false

    const isValid = await bcrypt.compare(user.password, password)

    return isValid
  }
}

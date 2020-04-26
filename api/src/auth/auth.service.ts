import { User } from './../users/intefaces/user.inteface'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UsersService } from './../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async validateUser(login: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(login)
    let isPasswordValid = await this.usersService.validatePassword(user, password)

    return isPasswordValid ? user : null
  }

  public async login(user: User): Promise<{ accessToken: string }> {
    const payload = {
      login: user.login,
      sub: user._id,
    }

    const accessToken = this.jwtService.sign(payload)

    return { accessToken }
  }
}

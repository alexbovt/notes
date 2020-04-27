import { CreateUserDTO } from './../users/dto/create-user.dto'
import { LoginUserDTO } from './../users/dto/login-user.dto'
import { User } from './../users/intefaces/user.inteface'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { UsersService } from './../users/users.service'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  public async login(loginUserDTO: LoginUserDTO): Promise<{ accessToken: string } | null> {
    const { login, password } = loginUserDTO
    const user = await this.validateUser(login, password)

    if (user) {
      const accessToken = await this.loginCore(user)

      return {
        accessToken,
      }
    }

    return null
  }

  //todo validate, check if exist, login user after registration
  public async register(createUserDTO: CreateUserDTO): Promise<User> {
    const user = await this.usersService.add(createUserDTO)

    return user
  }

  private async validateUser(login: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(login)
    const isPasswordValid = await this.usersService.validatePassword(user, password)

    return isPasswordValid ? user : null
  }

  private async loginCore(user: User): Promise<string> {
    const payload = {
      login: user.login,
      sub: user._id,
    }

    const token = await this.jwtService.sign(payload)

    return token
  }
}

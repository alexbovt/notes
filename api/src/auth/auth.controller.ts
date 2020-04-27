import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common'

import { CreateUserDTO } from './../users/dto/create-user.dto'
import { AuthService } from './auth.service'
import { LoginUserDTO } from './../users/dto/login-user.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  public async login(@Res() response, @Body() loginUserDTO: LoginUserDTO): Promise<Response> {
    const result = await this.authService.login(loginUserDTO)

    if (!result) {
      return response.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Wrong login or password',
      })
    }

    return response.status(HttpStatus.OK).json({
      message: 'Login successfully',
      ...result,
    })
  }

  @Post('/register')
  public async register(@Res() response, @Body() createUserDTO: CreateUserDTO): Promise<Response> {
    const user = await this.authService.register(createUserDTO)

    return response.status(HttpStatus.CREATED).json({
      message: 'User has been registred !!',
      user,
    })
  }
}

import {Controller, Post, Body, Res, Request, HttpStatus, UseGuards, Get, Req} from '@nestjs/common'

import {CreateUserDTO} from './../users/dto/create-user.dto'
import {AuthService} from './auth.service'
import {LocalAuthGuard} from "./guards/local-auth.guard";
import {JwtAuthGuard} from "./guards/jwt-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    public async login(@Request() request): Promise<{ accessToken: string }> {
        return this.authService.login(request.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/test')
    public async test(@Request() request) {
        return request.user;
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

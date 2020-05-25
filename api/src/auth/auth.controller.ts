import {Controller, Post, Body, Res, Request, HttpStatus, UseGuards, Get, Req} from '@nestjs/common'

import {CreateUserDTO} from './../users/dto/create-user.dto'
import {AuthService} from './auth.service'
import {LocalAuthGuard} from "./guards/local-auth.guard";
import {ClientUser} from "../users/intefaces/user.inteface";

type ServiceResponse = { accessToken: string, user: ClientUser }

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    public async login(@Request() request): Promise<ServiceResponse> {
        return this.authService.login(request.user)
    }

    @Post('/init')
    public async init(@Body() body: { token: string }): Promise<ServiceResponse> {
        const {token} = body

        if (!token)
            return Promise.resolve({accessToken: '', user: null})

        const {newToken, user} = await this.authService.prolong(token)

        return {
            accessToken: newToken, user
        }
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

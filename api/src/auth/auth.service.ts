import {CreateUserDTO} from './../users/dto/create-user.dto'
import {ClientUser, User} from './../users/intefaces/user.inteface'
import {Injectable} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'

import {UsersService} from './../users/users.service'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {
    }

    public async login(user: ClientUser): Promise<{ accessToken: string, user: ClientUser } | null> {
        const token = await this.jwtService.sign(user)

        return {
            accessToken: token,
            user
        }
    }

    //todo validate, check if exist, login user after registration
    public async register(createUserDTO: CreateUserDTO): Promise<User> {
        const user = await this.usersService.add(createUserDTO)

        return user
    }

    public async validateUser(userLogin: string, password: string): Promise<ClientUser | null> {
        const user = await this.usersService.findOne(userLogin)
        const isPasswordValid = await this.usersService.validatePassword(user, password)

        if (!isPasswordValid)
            return null

        const {_id, login, name, email} = user

        const clientUser: ClientUser = {
            _id,
            login,
            name,
            email
        }

        return clientUser
    }
}

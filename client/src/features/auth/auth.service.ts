import {BaseService} from '../../shared/base.service'
import {AxiosResponse} from 'axios'
import {CreateUserDTO} from './registration.component'
import {User} from './auth.slice'

type AuthResponse = {
    message: string
    user: User
}

export type LoginUserDTO = {
    login: string,
    password: string
}

class AuthService extends BaseService {
    protected controller: string = 'auth'

    public async login(loginUserDTO: LoginUserDTO): Promise<AxiosResponse<any>> {
        const {data} = await this.invoke<any>({
            url: 'login',
            method: 'post',
            data: {
                username: loginUserDTO.login,
                password: loginUserDTO.password
            },
        })

        localStorage.setItem('token', data.accessToken)

        return data
    }


    //#Todo revmove
    public test(): Promise<AxiosResponse<any>> {
        return this.invoke<any>({
            url: 'test',
            method: 'get',
        })
    }

    public register(createUserDTO: CreateUserDTO): Promise<AxiosResponse<AuthResponse>> {
        return this.invoke<any>({
            url: 'register',
            method: 'post',
            data: createUserDTO,
        })
    }
}

export const authService = new AuthService()

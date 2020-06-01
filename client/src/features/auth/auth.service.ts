import {BaseService, ServiceResponse} from '../../shared/base.service'

export type LoginUserDTO = {
    username: string,
    password: string
}

class AuthService extends BaseService {
    protected controller: string = 'auth'

    public login(loginUserDTO: LoginUserDTO): Promise<ServiceResponse> {
        return this.invoke({
            url: 'login',
            method: 'post',
            data: loginUserDTO
        })
    }

    public init(token: string): Promise<ServiceResponse> {
        return this.invoke({
            url: 'init',
            method: 'post',
            data: {token}
        })
    }
}

export const authService = new AuthService()

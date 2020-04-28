import { LoginUserDTO } from './login.component'
import { BaseService } from '../shared/base.service'
import { AxiosResponse } from 'axios'
import { CreateUserDTO } from './registration.component'
import { User } from './auth.slice'

type AuthResponse = {
  message: string
  user: User
}

class AuthService extends BaseService {
  protected controller: string = 'auth'

  public login(loginUserDTO: LoginUserDTO): Promise<AxiosResponse<any>> {
    return this.invoke<any>({
      url: 'login',
      method: 'post',
      data: loginUserDTO,
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

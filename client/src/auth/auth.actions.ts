import { authSlice } from './auth.slice'
import { authService } from './auth.service'
import { AppThunk, AppDispatch } from '../app.store'
import { CreateUserDTO } from './registration.component'

const { registered } = authSlice.actions

export const register = (createUserDTO: CreateUserDTO): AppThunk => async (dispatch: AppDispatch) => {
  const { data } = await authService.register(createUserDTO)

  dispatch(registered(data.user))
}

export const login = (): AppThunk => async (dispatch: AppDispatch) => {}

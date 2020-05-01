import {authService} from './auth.service'
import {AppThunk, AppDispatch} from '../../app/app.store'
import {CreateUserDTO} from './registration.component'
import {registered} from './auth.slice'


export const register = (createUserDTO: CreateUserDTO): AppThunk => async (dispatch: AppDispatch) => {
    const {data} = await authService.register(createUserDTO)

    dispatch(registered(data.user))
}

// export const login = (): AppThunk => async (dispatch: AppDispatch) => {
// }

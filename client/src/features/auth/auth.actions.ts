import {authService, LoginUserDTO} from './auth.service'
import {AppThunk, AppDispatch} from '../../app/app.store'
import {CreateUserDTO} from './registration.component'
import {registered} from './auth.slice'
import {progressStared, progressEnded} from '../../app/app.slice'
import {showErrorToast} from '../../app/app.actions'


export const register = (createUserDTO: CreateUserDTO): AppThunk => async (dispatch: AppDispatch) => {
    const {data} = await authService.register(createUserDTO)

    dispatch(registered(data.user))
}

export const login = (loginUserDTO: LoginUserDTO): AppThunk => async (dispatch: AppDispatch) => {
    try {
        dispatch(progressStared())
        const {data} = await authService.login(loginUserDTO)

        console.log(data)
    } catch (e) {
        dispatch(showErrorToast(e.message))
    } finally {
        dispatch(progressEnded())
    }
}

export const test = (): AppThunk => async (dispatch: AppDispatch) => {
    try {
        dispatch(progressStared())
        const {data} = await authService.test()

        console.log(data)
    } finally {
        dispatch(progressEnded())
    }
}

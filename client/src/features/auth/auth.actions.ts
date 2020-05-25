import {authService, LoginUserDTO} from './auth.service'
import {AppThunk, AppDispatch} from '../../app/app.store'
import {CreateUserDTO} from './registration.component'
import {loggedOut, loggedIn} from './auth.slice'
import {progressStared, progressEnded} from '../../app/app.slice'
import {showErrorToast} from '../../app/app.actions'

export const initAuthentication = (): AppThunk => async (dispatch: AppDispatch) => {
    try {
        dispatch(progressStared())
        const {user} = await authService.init()

        if (user) {
            dispatch(loggedIn(user))
        } else {
            dispatch(loggedOut())
        }
    } finally {
        dispatch(progressEnded())
    }
}

export const register = (createUserDTO: CreateUserDTO): AppThunk => async (dispatch: AppDispatch) => {

}

export const login = (loginUserDTO: LoginUserDTO): AppThunk => async (dispatch: AppDispatch) => {
    try {
        dispatch(progressStared())
        const {user} = await authService.login(loginUserDTO)
        dispatch(loggedIn(user))
    } catch (e) {
        dispatch(showErrorToast(e.message))
    } finally {
        dispatch(progressEnded())
    }
}

export const logout = (): AppThunk => async (dispatch: AppDispatch) => {
    localStorage.clear()
    dispatch(loggedOut())
}

import {AppDispatch, AppThunk} from './app.store';
import {setToast, ToastState} from './app.slice';

export const showWarningToast = (message: string): AppThunk => (dispatch: AppDispatch) => {
    const toast: ToastState = {
        type: 'warning',
        message
    }
    dispatch(setToast(toast))
}

export const showErrorToast = (message: string): AppThunk => (dispatch: AppDispatch) => {
    const toast: ToastState = {
        type: 'error',
        message
    }
    dispatch(setToast(toast))
}

export const showSuccessToast = (message: string): AppThunk => (dispatch: AppDispatch) => {
    const toast: ToastState = {
        type: 'success',
        message
    }
    dispatch(setToast(toast))
}

export const showInfoToast = (message: string): AppThunk => (dispatch: AppDispatch) => {
    const toast: ToastState = {
        type: 'info',
        message
    }
    dispatch(setToast(toast))
}

import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import {ApplicationState, rootReducer} from './app.reducer';

export const rootStore = configureStore({
    reducer: rootReducer
});


export const globalActionDispatch = (action: AppThunk): void => {
    rootStore.dispatch(action)
}

export type AppDispatch = typeof rootStore.dispatch
export type AppThunk = ThunkAction<void, ApplicationState, null, Action<string>>

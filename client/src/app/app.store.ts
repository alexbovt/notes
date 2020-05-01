import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import {ApplicationState, appReducer} from './app.reducer';

export const appStore = configureStore({
    reducer: appReducer
});

export type AppDispatch = typeof appStore.dispatch
export type AppThunk = ThunkAction<void, ApplicationState, null, Action<string>>

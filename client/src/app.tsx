import React from 'react';
import {configureStore} from '@reduxjs/toolkit';

import {SnackBarProvider} from './shared/snackbar/snackbar-provider';
import {Hello} from './hello/hello';
import {Todos} from './todo/todo.component';
import {appReducer} from "./app.reducer";

const store = configureStore({
    reducer: appReducer
});

export const App = (): JSX.Element => (

    <SnackBarProvider>
        <div style={{
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Hello/>
            <hr/>
            <Todos/>
        </div>
    </SnackBarProvider>
);

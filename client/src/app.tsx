import React from 'react';

import {SnackBarProvider} from './shared/snackbar/snackbar-provider';
import {Hello} from './components/hello/hello';
import {Todos} from './todo/todo';

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

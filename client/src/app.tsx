import React from 'react';

import {Provider} from 'react-redux';
import {appStore} from './app.store';

import {Todos} from './todo/todo.component';
import {Hello} from './hello/hello';

export const App = (): JSX.Element => (
    <Provider store={appStore}>
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
    </Provider>
);

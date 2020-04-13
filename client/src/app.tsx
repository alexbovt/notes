import React from 'react';

import {Hello} from "./components/hello/hello";
import {Todo} from "./todo/todo";

export const App = (): JSX.Element => (
    <div style={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Hello/>
        <hr/>
        <Todo/>
    </div>
);

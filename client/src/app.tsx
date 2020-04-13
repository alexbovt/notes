import React from 'react';

import {Hello} from "./components/hello/hello";
import {Todos} from "./todo/todo";

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
        <Todos/>
    </div>
);

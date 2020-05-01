import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {AppBar} from "@material-ui/core";

import {Hello} from '../features/hello/hello'
import {Todos} from '../features/todo/todo.component'
import {Login} from '../features/auth/login.component'
import {Registration} from '../features/auth/registration.component'
import {NotFound} from '../components/not-found/not-found'
import {AppHeader} from "../components/app-header/app-header";

export const Main = (): JSX.Element => (
    <Router>
        <AppHeader/>
        <Switch>
            <Route path="/" exact component={Hello}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Registration}/>
            <Route path="/todos" component={Todos}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)

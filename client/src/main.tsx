import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Hello } from './hello/hello'
import { Todos } from './todo/todo.component'
import { Login } from './auth/login.component'
import { Registration } from './auth/registration.component'
import { NotFound } from './not-found'

export const Main = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/" exact component={Hello} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registration} />
      <Route path="/todos" component={Todos} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

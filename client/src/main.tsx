import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Hello } from './hello/hello'
import { Todos } from './todo/todo.component'
import { Login } from './login/login.component'
import { NotFound } from './not-found'

export const Main = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/" exact component={Hello} />
      <Route path="/login" exact component={Login} />
      <Route path="/todos" component={Todos} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

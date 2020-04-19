import React from 'react'
import { Provider } from 'react-redux'

import { appStore } from './app.store'
import { Main } from './main'

export const App = (): JSX.Element => (
  <Provider store={appStore}>
    <Main />
  </Provider>
)

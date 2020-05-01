import React from 'react'
import {Provider} from 'react-redux'

import {rootStore} from './app.store'
import {Main} from './main'

export const App = (): JSX.Element => (
    <Provider store={rootStore}>
        <Main/>
    </Provider>
)

import React, {useEffect} from 'react'
import {Provider} from 'react-redux'

import {rootStore} from './app.store'
import {Main} from './main'
import {initAuthentication} from "../features/auth/auth.actions";

export const App = (): JSX.Element => {

    useEffect(() => {
        rootStore.dispatch(initAuthentication())
    }, [])

    return (
        <Provider store={rootStore}>
            <Main/>
        </Provider>
    )
}

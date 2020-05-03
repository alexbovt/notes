import React from 'react'
import {RouteProps} from "react-router";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

import {authSelector} from "../../shared/selectors/auth.selectors";

type Props = {
    component: () => JSX.Element
} & RouteProps

export const PrivateRoute = ({component: Component, ...rest}: Props): JSX.Element => {

    const isAuthenticated = useSelector(authSelector.isAuthenticated)

    if (!isAuthenticated)
        return <Redirect to={'/login'}/>

    return <Route {...rest} render={props => <Component {...props}/>}/>
}

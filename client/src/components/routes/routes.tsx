import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import React, {Fragment} from "react";
import {RouteProps} from "react-router";

import {authSelector} from "../../shared/selectors/auth.selectors";

type Props = {
    component: () => JSX.Element
} & RouteProps

export const PrivateRoute = (props: Props): JSX.Element => {
    const isAuthenticated = useSelector(authSelector.isAuthenticated)

    return <ProtectedRoute condition={Boolean(isAuthenticated)} url={'login'} {...props}/>
}

export const PublicOnlyRoute = (props: Props): JSX.Element => {
    const isAuthenticated = useSelector(authSelector.isAuthenticated)

    return <ProtectedRoute condition={!Boolean(isAuthenticated)} url={'/'} {...props}/>
}

type ProtectedRouteProps = Props & {
    condition: boolean,
    url: string
}

export const ProtectedRoute = ({component: Component, condition, url, ...rest}: ProtectedRouteProps): JSX.Element => {

    if (condition)
        return <Route {...rest} render={props => <Component {...props}/>}/>

    return <Redirect to={url}/>
}

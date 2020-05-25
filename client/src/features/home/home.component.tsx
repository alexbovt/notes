import React from 'react'
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';

import {authSelector} from "../../shared/selectors/auth.selectors";

export const Home = (): JSX.Element => {
    const isAuthenticated = useSelector(authSelector.isAuthenticated)
    const urlToRedirect = isAuthenticated ? 'home' : 'login'

    return <Redirect to={urlToRedirect}/>
}

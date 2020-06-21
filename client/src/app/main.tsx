import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import {Todos} from '../features/todo/todo.component'
import {Login} from '../features/auth/login.component'
import {Registration} from '../features/auth/registration.component'
import {NotFound} from '../components/not-found/not-found'
import {AppHeader} from "../components/app-header/app-header";
import {PrivateRoute, PublicOnlyRoute} from "../components/routes/routes";
import {AppToast} from "../components/snackbar/snackbar";
import {Startup} from "../features/home/startup.component";
import {useSelector} from "react-redux";
import {authSelector} from "../shared/selectors/auth.selectors";
import {appSelector} from "../shared/selectors/app.selectors";
import {AppDrawer} from "../components/app-drawer/app-drawer";
import {Home} from "../features/home/home.component";


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    appBarSpacer: theme.mixins.toolbar,
    main: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    initialLoader: {
        margin: "auto",
        width: '100%',
        height: '100%',
    }
}))

export const Main = (): JSX.Element => {
    const classes = useStyles()
    const isAuthenticated = useSelector(authSelector.isAuthenticated)
    const isLoading = useSelector(appSelector.isLoading)
    const isInitialLoad = isAuthenticated == null && isLoading

    return (
        <Router>
            <div className={classes.root}>
                <AppToast/>
                <CssBaseline/>
                {isInitialLoad ? <InitialLoader/> : <PageContent/>}
            </div>
        </Router>
    )
}

export const InitialLoader = (): JSX.Element => {
    const classes = useStyles()

    return <CircularProgress color={"secondary"} className={classes.initialLoader}/>
}

const PageContent = (): JSX.Element => {
    const classes = useStyles()
    const isAuthenticated = useSelector(authSelector.isAuthenticated)

    return (
        <>
            <AppHeader/>
            {isAuthenticated && <AppDrawer/>}
            <Container component={'main'} maxWidth="lg" className={classes.main}>
                <div className={classes.appBarSpacer}/>
                <Grid container justify={'center'} alignItems={'stretch'}>
                    <RouterSwitch/>
                </Grid>
            </Container>
        </>
    )
}

const RouterSwitch = (): JSX.Element => (
    <Switch>
        <PrivateRoute path="/" exact component={Startup}/>
        <PrivateRoute path="/home" exact component={Home}/>
        <PublicOnlyRoute path="/login" component={Login}/>
        <PublicOnlyRoute path="/register" component={Registration}/>
        <PrivateRoute path="/todos" component={Todos}/>
        <Route component={NotFound}/>
    </Switch>
)





import React from 'react'
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import {Hello} from '../features/hello/hello'
import {Todos} from '../features/todo/todo.component'
import {Login} from '../features/auth/login.component'
import {Registration} from '../features/auth/registration.component'
import {NotFound} from '../components/not-found/not-found'
import {AppHeader} from "../components/app-header/app-header";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    appBarSpacer: theme.mixins.toolbar,
    main: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
}))

export const Main = (): JSX.Element => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Router>
                <AppHeader/>
                <div className={classes.appBarSpacer}/>
                <Container component={'main'} maxWidth="lg" className={classes.main}>
                    <Grid container justify={'center'} alignItems={'stretch'}>
                        <RouterSwitch/>
                    </Grid>
                </Container>
            </Router>
        </div>
    )
}


const RouterSwitch = (): JSX.Element => (
    <Switch>
        <Route path="/" exact component={Hello}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Registration}/>
        <Route path="/todos" component={Todos}/>
        <Route component={NotFound}/>
    </Switch>
)





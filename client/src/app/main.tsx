import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import Container from "@material-ui/core/Container";

import {Hello} from '../features/hello/hello'
import {Todos} from '../features/todo/todo.component'
import {Login} from '../features/auth/login.component'
import {Registration} from '../features/auth/registration.component'
import {NotFound} from '../components/not-found/not-found'
import {AppHeader} from "../components/app-header/app-header";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}))

export const Main = (): JSX.Element => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Router>
                <AppHeader/>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container justify={'center'}>
                            <RouterSwitch/>
                        </Grid>
                    </Container>
                </main>
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





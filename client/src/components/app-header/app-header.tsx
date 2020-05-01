import React, {useEffect} from "react";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuIcon from '@material-ui/icons/Menu';
import {useSelector} from "react-redux";

import {authSelector} from "../../shared/selectors/auth.selectors";
import {appSelector} from "../../shared/selectors/app.selectors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const AppHeader = (): JSX.Element => {

    const isAuthenticated = useSelector(authSelector.isAuthenticated)
    const isLoading = useSelector(appSelector.isLoading)

    return (
        <AppBar position="fixed">
            {isAuthenticated ? <AuthorizedToolbar/> : <AnonymousToolbar/>}
            {isLoading && <LinearProgress color={'secondary'}/>}
        </AppBar>
    )

}

const AuthorizedToolbar = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon/>
            </IconButton>
            <AppTitle/>
            <Button color="inherit">Logout</Button>
        </Toolbar>
    )
}

const AnonymousToolbar = (): JSX.Element => {
    return (
        <Toolbar>
            <AppTitle/>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
        </Toolbar>
    )
}

const AppTitle = (): JSX.Element => {

    const classes = useStyles();
    const title = useSelector(appSelector.title)

    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <Typography variant="h6" className={classes.title}>
            {title}
        </Typography>
    )
}

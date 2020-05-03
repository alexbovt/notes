import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button, createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {useSelector} from "react-redux";

import {authSelector} from "../../shared/selectors/auth.selectors";

const useStyles = makeStyles((theme: Theme) => createStyles({
    marginTop: {
        marginTop: '10vh'
    },
    icon: {
        fontSize: '5em'
    }
}))

export const NotFound = (): JSX.Element => {
    const history = useHistory()
    const classes = useStyles()
    const isAuthenticated = useSelector(authSelector.isAuthenticated)

    const handleGoBack = () => history.goBack()
    const handleGoHome = () => {
        const homePageUrl = isAuthenticated ? '/' : '/login'
        history.replace(homePageUrl)
    }

    return (
        <Grid item xl={4} lg={4} md={8} sm={10} xs={12} className={classes.marginTop}>
            <Grid container direction={'column'} alignItems={'center'}>
                <ErrorOutlineIcon color='secondary' className={classes.icon}/>
                <Typography component="h1" variant="h3">
                    Page not found
                </Typography>
            </Grid>
            <Grid container justify={'space-between'} className={classes.marginTop}>
                <Button variant="outlined" color="secondary" onClick={handleGoBack}>
                    Go back
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleGoHome}>
                    {isAuthenticated ? 'Go to home page' : 'Go to login page'}
                </Button>
            </Grid>
        </Grid>
    )
}

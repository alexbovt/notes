import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import makeStyles from "@material-ui/core/styles/makeStyles";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";

import {appSelector} from '../../shared/selectors/app.selectors';
import {clearToast} from '../../app/app.slice';

const useStyles = makeStyles(theme => ({
    // success: {
    //     backgroundColor: '#4caf50'
    // },
    // error: {
    //     backgroundColor: '#f44336'
    // },
    // warning: {
    //     backgroundColor: '#ff9800'
    // },
    // info: {
    //     backgroundColor: '#2196f3'
    // }
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
}))

export const AppToast = (): JSX.Element => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const {message, type} = useSelector(appSelector.toast)

    const handleClose = () => dispatch(clearToast())

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            open={message !== ''}
            autoHideDuration={4000}
            onClose={handleClose}
            aria-describedby='client-snackbar'
            ContentProps={{className: classes[type]}}
            message={
                <span id='client-snackbar'>
                    {message}
                </span>
            }
            action={[
                <IconButton
                    key='close'
                    aria-label='close'
                    color='inherit'
                    onClick={handleClose}
                >
                    <Icon>close</Icon>
                </IconButton>
            ]}
        />
    )
}

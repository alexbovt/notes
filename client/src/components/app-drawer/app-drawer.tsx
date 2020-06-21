import React, {useCallback, useEffect} from 'react'
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LinkIcon  from '@material-ui/icons/Link';

import {appSelector} from "../../shared/selectors/app.selectors";
import {closeDrawer} from '../../app/app.slice';
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
}))

const SimpleLinkItem = <ListItem button>
    <ListItemIcon>
        <LinkIcon />
    </ListItemIcon>
    <ListItemText primary="Link"/>
</ListItem>


export const AppDrawer = (): JSX.Element => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const isOpen = useSelector(appSelector.isDrawerOpen)
    const handleClose = useCallback(() => dispatch(closeDrawer()), [])

    return (
        <Drawer
            open={isOpen}
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !isOpen && classes.drawerPaperClose)
            }}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List>{[SimpleLinkItem, SimpleLinkItem, SimpleLinkItem]}</List>
            <Divider/>
            <List>{[SimpleLinkItem, SimpleLinkItem]}</List>
        </Drawer>
    )
}

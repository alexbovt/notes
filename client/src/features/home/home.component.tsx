import React from 'react'
import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";

import {authSelector} from "../../shared/selectors/auth.selectors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    home: {
        display: 'flex',
        height: '100%',

    }
}))

export const Home = (): JSX.Element => {
    const classes = useStyles()

    const user = useSelector(authSelector.user)

    return (
        <div className={classes.home}>
            <Typography variant="h4">
                {`Hi, ${user?.name}`}
            </Typography>
        </div>
    )
}

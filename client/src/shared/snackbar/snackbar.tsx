import React from 'react'

import {Snackbar} from "@material-ui/core";

interface Props {
    message: string
}

export const SnackBar = ({message}: Props): JSX.Element => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={true}
            message={message}
        />
    )
};

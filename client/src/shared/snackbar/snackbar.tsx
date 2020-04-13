import React from 'react'

interface Props {
    children: React.ReactNode
}

export const SnackBar = ({children}: Props): JSX.Element => {
    return <div>{children}</div>;
};

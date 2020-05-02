import React, {useEffect} from 'react'
import {makeStyles, createStyles, Theme, TextField, Button, Link, FormControl} from '@material-ui/core'
import {useForm, Controller} from "react-hook-form";
import {useDispatch} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import {progressStared, progressEnded} from '../../app/app.slice';

const useStyles = makeStyles((theme: Theme) => createStyles({
    margin: {
        margin: 10,
    },
    padding: {
        padding: 5
    }
}))

type FormState = {
    login: string
    password: string
}

export const Login = (): JSX.Element => {
    const {handleSubmit, control, errors} = useForm<FormState>({
        reValidateMode: 'onBlur'
    })

    const classes = useStyles()

    const onSubmit = async (data: FormState): Promise<void> => {
        console.log(data)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(progressStared())

        setTimeout(() => {
            dispatch(progressEnded())
        }, 2000)
    }, [])


    return (
        <Grid item direction={'column'} xl={6} lg={8} md={10} sm={12}>
            <Paper className={classes.padding}>
                <FormControl fullWidth>
                    <Controller
                        as={TextField}
                        name={'login'}
                        control={control}
                        rules={{required: true}}
                        defaultValue={''}
                        label={'Login'}
                        type={'text'}
                        error={!!errors.login}
                        helperText={!!errors.login && 'Login is required'}
                    />
                    <Controller
                        as={TextField}
                        name={'password'}
                        control={control}
                        rules={{required: true}}
                        defaultValue={''}
                        label={'Password'}
                        type={'password'}
                        error={!!errors.password}
                        helperText={!!errors.password && 'Password is required'}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
                        Sign in
                    </Button>
                </FormControl>
            </Paper>
        </Grid>
    )
}

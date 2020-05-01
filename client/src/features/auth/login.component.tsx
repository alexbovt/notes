import React, {useEffect} from 'react'
import {makeStyles, createStyles, Theme, TextField, Button, Link, FormControl} from '@material-ui/core'
import {useForm, Controller} from "react-hook-form";
import {Link as RouterLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {appSelector} from "../../shared/selectors/app.selectors";
import { progressStared, progressEnded } from '../../app/app.slice';

const useStyles = makeStyles((theme: Theme) => createStyles({}))

type FormState = {
    login: string
    password: string
}

export const Login = (): JSX.Element => {
    const {handleSubmit, control, errors} = useForm<FormState>({
        reValidateMode: 'onBlur'
    })

    const onSubmit = async (data: FormState): Promise<void> => {
        console.log(data)
    }

    const appTitle = useSelector(appSelector.title)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(progressStared())

        setTimeout(() => {
            dispatch(progressEnded())
        }, 2000)
    }, [])

    return (
        <FormControl>
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
            <Link component={RouterLink} to="/register">
                Don't have an account ? Sign up !
            </Link>
        </FormControl>
    )
}

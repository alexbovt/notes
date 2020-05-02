import React, {useEffect} from 'react'
import {useForm, Controller} from "react-hook-form";
import {useDispatch} from "react-redux";
import {Link as RouterLink} from 'react-router-dom'
import {
    createStyles,
    Theme,
    Grid,
    TextField,
    Button,
    FormControl,
    Link,
    makeStyles,
    Avatar,
    Typography
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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
        <Grid item xl={4} lg={4} md={8} sm={10} xs={12}>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
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
                    margin="normal"
                    variant="outlined"
                    placeholder="Your login"
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
                    margin="normal"
                    variant="outlined"
                    placeholder="Your passowrd"
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSubmit(onSubmit)}
                >
                    Sign in
                </Button>
                <Grid container>
                    <Grid item lg={6} xs={12}>
                        <Link component={RouterLink} to={'/'} variant="body2" underline="none">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <Link component={RouterLink} to={'/register'} variant="body2" underline="none">
                            Don't have an account? Sign Up
                        </Link>
                    </Grid>
                </Grid>
            </FormControl>
        </Grid>
    )
}

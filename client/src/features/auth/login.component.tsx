import React from 'react'
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
    Typography
} from "@material-ui/core";

import {login} from "./auth.actions";
import {LoginUserDTO} from "./auth.service";

const useStyles = makeStyles((theme: Theme) => createStyles({
    form: {
        marginTop: '5vh'
    },
    mb2: {
        marginBottom: theme.spacing(2)
    },
    mt1: {
        marginTop: theme.spacing(1)
    },
    mt2: {
        marginTop: theme.spacing(2)
    },
    mt3: {
        marginTop: theme.spacing(3)
    }
}))

type FormState = LoginUserDTO

export const Login = (): JSX.Element => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const {handleSubmit, control, errors} = useForm<FormState>({
        reValidateMode: 'onBlur'
    })

    const onSubmit = (data: FormState): void => {
        dispatch(login(data))
    }

    return (
        <Grid item xl={4} lg={4} md={8} sm={10} xs={12} className={classes.form}>
            <Grid container justify={'center'} className={classes.mb2}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </Grid>
            <Grid container className={classes.mt2}>
                <FormControl fullWidth>
                    <Controller
                        as={TextField}
                        name={'username'}
                        control={control}
                        rules={{required: true}}
                        defaultValue={''}
                        label={'Login'}
                        type={'text'}
                        error={!!errors.username}
                        helperText={!!errors.username ? 'Login is required' : ' '}
                        margin="normal"
                        variant="outlined"
                        placeholder="Your login"
                        className={classes.mt1}
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
                        helperText={!!errors.password ? 'Password is required' : ' '}
                        margin="normal"
                        variant="outlined"
                        placeholder="Your passowrd"
                        className={classes.mt1}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit(onSubmit)}
                        className={classes.mt1}
                    >
                        Sign in
                    </Button>
                    <Grid container>
                        <Grid item lg={6} xs={12} className={classes.mt2}>
                            <Link component={RouterLink} to={'/'} variant="body2" underline="none">
                                Forgot password ?
                            </Link>
                        </Grid>
                        <Grid item lg={6} xs={12} className={classes.mt2}>
                            <Link component={RouterLink} to={'/register'} variant="body2" underline="none">
                                Don't have an account ? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </FormControl>
            </Grid>
        </Grid>
    )
}

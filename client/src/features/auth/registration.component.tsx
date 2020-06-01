import React from 'react'
import {makeStyles, createStyles, Theme, TextField, Button, Link, FormControl} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {ApplicationState} from '../../app/app.reducer'
import {Controller, useForm} from "react-hook-form";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => createStyles({}))

type FormState = {
    login: string
    email: string
    name: string
    password: string
    passwordConfirmation: string
}

export type CreateUserDTO = {
    login: string
    email: string
    password: string
    name: string
}

export const Registration = (): JSX.Element => {
    const {handleSubmit, control, errors, getValues} = useForm<FormState>({reValidateMode: 'onBlur'})

    const dispatch = useDispatch()
    const user = useSelector<ApplicationState>((state) => state.auth.user)

    const onSubmit = async (data: FormState): Promise<void | undefined> => {
        console.log(data)
    }

    const isPasswordConfirmationValid = (passwordConfirmation: string): boolean => passwordConfirmation === getValues('password')

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
                name={'email'}
                control={control}
                rules={{required: true}}
                defaultValue={''}
                label={'Email'}
                type={'email'}
                error={!!errors.email}
                helperText={!!errors.email && 'Email is required'}
            />
            <Controller
                as={TextField}
                name={'name'}
                control={control}
                rules={{required: true}}
                defaultValue={''}
                label={'Name'}
                type={'text'}
                error={!!errors.name}
                helperText={!!errors.name && 'Name is required'}
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
                helperText={!!errors.password && 'Passowrd is required'}
            />
            <Controller
                as={TextField}
                name={'passwordConfirmation'}
                control={control}
                rules={{
                    validate: {
                        passwordConfirmationRequired: isPasswordConfirmationValid
                    }
                }}
                defaultValue={''}
                label={'Password confirmation'}
                type={'password'}
                error={!!errors.passwordConfirmation}
                helperText={!!errors.passwordConfirmation && 'Passwords must be equal'}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
                Sign up
            </Button>
            <Link component={RouterLink} to="/login">
                Already have an account ? Sign in !
            </Link>
        </FormControl>
    )
}

import React, { ChangeEvent } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'

import { useForm } from '../../shared/hooks/form.hook'
import { register } from './auth.actions'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../../app/app.reducer'

const useStyles = makeStyles((theme: Theme) => createStyles({}))

type State = {
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
  const { fields, setValue } = useForm<State>({
    login: '',
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const dispatch = useDispatch()
  const user = useSelector<ApplicationState>((state) => state.auth.user)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target

    setValue(id as keyof State, value)
  }

  const validate = (): boolean => {
    const { login, email, password, passwordConfirmation, name } = fields

    const isPasswordsEquals = password === passwordConfirmation
    const isAllNotEmpty = [login, email, password, passwordConfirmation, name].every((x) => x !== '')

    return isPasswordsEquals && isAllNotEmpty;
  }

  const handleSubmit = async (): Promise<void | undefined> => {
    const { login, email, password, name } = fields

    if (!validate()) return

    const createUserDTO: CreateUserDTO = {
      email,
      login,
      password,
      name,
    }

    dispatch(register(createUserDTO))
  }

  return (
    <>
      Login <input type="text" id="login" value={fields.login} onChange={handleChange} /> <br />
      Name <input type="text" id="name" value={fields.name} onChange={handleChange} /> <br />
      Email <input type="email" id="email" value={fields.email} onChange={handleChange} /> <br />
      Password <input type="password" id="password" value={fields.password} onChange={handleChange} /> <br />
      Password Confiramtion
      <input
        type="password"
        id="passwordConfirmation"
        value={fields.passwordConfirmation}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSubmit}>Sign up</button>
      <hr />
      {user && JSON.stringify(user, undefined, 2)}
    </>
  )
}

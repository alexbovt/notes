import React, { ChangeEvent } from 'react'
import axios from 'axios'
import { makeStyles, createStyles, Theme } from '@material-ui/core'

import { useForm } from '../shared/hooks/form.hook'

const useStyles = makeStyles((theme: Theme) => createStyles({}))

type State = {
  login: string
  email: string
  name: string
  password: string
  passwordConfirmation: string
}

type CreateUserDTO = {
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target

    setValue(id as keyof State, value)
  }

  const handleSubmit = async (): Promise<void | undefined> => {
    const { login, email, password, passwordConfirmation, name } = fields

    //#todo add validation
    if (
      [login, email, password, passwordConfirmation].some((x) => x === '') ||
      password !== passwordConfirmation
    ) {
      return
    }

    const { data } = await axios.post('http://localhost:4200/auth/register', {
      email,
      login,
      password,
      name,
    } as CreateUserDTO)

    console.log(data)
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
    </>
  )
}

import React, { ChangeEvent } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import axios from 'axios'

import { useForm } from '../../shared/hooks/form.hook'

const useStyles = makeStyles((theme: Theme) => createStyles({}))

type State = {
  login: string
  password: string
}

export type LoginUserDTO = {
  login: string
  password: string
}

export const Login = (): JSX.Element => {
  const { fields, setValue } = useForm<State>({ login: '', password: '' })

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target

    setValue(id as keyof State, value)
  }

  const handleSubmit = async (): Promise<void | undefined> => {
    const { login, password } = fields

    if ([login, password].every((x) => x !== '')) {
      const { data } = await axios.post('http://localhost:4200/auth/login', {
        login,
        password,
      } as LoginUserDTO)

      console.log(data)
    }
  }

  return (
    <>
      <input type="text" id="login" value={fields.login} onChange={handleChange} />
      <br />
      <input type="password" id="password" value={fields.password} onChange={handleChange} />
      <br />
      <button onClick={handleSubmit}>Sign in</button>
    </>
  )
}

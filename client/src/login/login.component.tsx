import React, { ChangeEvent } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'

import { useForm } from '../shared/hooks/form.hook'

const useStyles = makeStyles((theme: Theme) => createStyles({}))

type State = {
  login: string
  password: string
}

export const Login = (): JSX.Element => {
  const { fields, setValue } = useForm<State>({ login: '', password: '' })

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target

    setValue(id as keyof State, value)
  }

  const handleSubmit = (): void | undefined => {
    console.log(fields)
    Object.keys(fields).forEach((key) => setValue(key as keyof State, ''))
  }

  return (
    <>
      <input type="text" id="login" value={fields.login} onChange={handleChange} />
      <input type="text" id="password" value={fields.password} onChange={handleChange} />
      <button onClick={handleSubmit}>Sign in</button>
    </>
  )
}

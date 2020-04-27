import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Hello = (): JSX.Element => {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    async function getMessage(): Promise<void> {
      const response = await fetch('http://localhost:4200/')
      const msg = await response.text()

      setMessage(msg)
    }

    getMessage()
  }, [])

  return (
    <>
      <span>{message}</span>
      <br />
      <Link to={'/todos'}>Todos</Link><br/>
      <Link to={'/login'}>Login</Link><br/>
      <Link to={'/register'}>Registration</Link><br/>
    </>
  )
}

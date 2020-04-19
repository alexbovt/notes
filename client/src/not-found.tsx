import React from 'react'
import { useHistory } from 'react-router-dom'

export const NotFound = (): JSX.Element => {
  const history = useHistory()

  const handleGoBack = (): void => history.goBack()

  return (
    <div>
      <span>Page Not Found !</span>
      <br />
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

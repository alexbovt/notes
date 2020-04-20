import React, { useState, ChangeEvent } from 'react'

type UseFormHook<T extends object> = {
  fields: T
  setValue: (key: keyof T, value: T[keyof T]) => void | undefined
  //setValue: (event: ChangeEvent<{ name: keyof T; value: T[keyof T] }>) => void | undefined
}

export function useForm<T extends object>(initialValues: T): UseFormHook<T> {
  const [state, setState] = useState<T>(initialValues)

  const setValue = (key: keyof T, value: T[keyof T]) => {
    // const setValue = (event: ChangeEvent<{ name: keyof T; value: T[keyof T] }>) => {
    // const { name, value } = event.target

    setState((prevState) => ({
      ...prevState,
      [key]: value,
      //[name]: value,
    }))
  }

  return {
    fields: state,
    setValue,
  }
}

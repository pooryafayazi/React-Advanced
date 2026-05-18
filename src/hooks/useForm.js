// src\hooks\useForm.js
'use client'
import { useState } from 'react'

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues)

  const handleChange = ({ target: { name, value } }) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setValues((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }))
  // }

  // const handleChange = (e) => {
  //   setValues({
  //      ...values,
  //      [e.target.name]: e.target.value
  //})
  // }

  const resetForm = () => {
    setValues(initialValues)
  }

  return {
    values,
    handleChange,
    resetForm,
    setValues,
  }
}

import { useState, useEffect } from 'react';
import { formInputs } from '../config/inputs';
import { validateForm } from '../utils/validateForm';

export const useForm = (callback) => {
  const [inputs, setInputs] = useState(formInputs);

  useEffect(() => handleValidation(inputs), [inputs])

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    const { isValid } = validateForm(inputs)

    if (isValid) {
      callback()
      e.target.reset();
      setInputs(inputs => formInputs)
    }
  }

  const handleValidation = (inputs) => {
    validateForm(inputs)
  }

  const handleInput = (e) => {
    e.persist();
    setInputs(inputs => ({ ...inputs, [e.target.id]: { ...inputs[e.target.id], value: e.target.value } }))
  }

  return {
    handleSubmit,
    handleInput,
    inputs,
  }
};
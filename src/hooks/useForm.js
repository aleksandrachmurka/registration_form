import { useState } from 'react';
import { formInputs } from '../config/inputs';
import { validateForm } from '../utils/validateForm';

export const useForm = (callback) => {
  const [inputs, setInputs] = useState(formInputs);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (errors) {
      setErrors([])
    }

    const { inputErrors, isFormValid } = validateForm(inputs)

    if (isFormValid) {
      callback()
      e.target.reset();
      setInputs(inputs => formInputs)
    } else {
      setErrors(errors => [...inputErrors])
    }
  }

  const handleInput = (e) => {
    e.persist();
    setInputs(inputs => ({ ...inputs, [e.target.id]: { ...inputs[e.target.id], value: e.target.value } }))
  }

  return {
    handleSubmit,
    handleInput,
    inputs,
    errors,
  }
};
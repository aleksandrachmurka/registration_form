import { useState } from 'react';
import { checkIfEmpty, checkIfPasswordIsDifferent, checkIfEmailIsIncorrect } from '../utils/validationUtils';

export const useValidation = (callback) => {
  const [errors, setErrors] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const checkInputs = (inputs) => {
    const inputErrors = [];
    for (let input in inputs) {
      if (inputs[input].required && checkIfEmpty(inputs[input])) {
        inputErrors.push(`${inputs[input].label} is empty. Please fill it in`);
      }
      if (inputs[input].id === 'repeatPassword' && checkIfPasswordIsDifferent(inputs['password'].value, inputs[input].value)) {
        inputErrors.push('Passwords must be identical')
      }
      if (inputs[input].id === 'email' && checkIfEmailIsIncorrect(inputs[input].value)) {
        inputErrors.push('Email format is incorrect')
      }
    }
    return inputErrors;
  }

  const validateForm = (inputs) => {
    const inputErrors = checkInputs(inputs)
    setErrors(errors => [...errors, inputErrors])
    errors.length === 0 && setIsFormValid(true);
    callback();
  }

  return {
    validateForm,
    errors,
    isFormValid,
  }
};
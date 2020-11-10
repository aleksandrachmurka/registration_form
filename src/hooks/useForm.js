import { useState } from 'react';
import { formInputs } from '../config/inputs';
import { validateForm, isFormValid } from '../utils/validateForm';

export const useForm = (callback) => {
  const [inputs, setInputs] = useState(formInputs);

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (isFormValid(inputs)) {
      callback()
      e.target.reset();
      setInputs(formInputs)
    }
  }

  const handleInput = (e) => {
    e.persist();
    const inputId = e.target.id;
    const newInputs = { ...inputs, [inputId]: { ...inputs[inputId], value: e.target.value } }
    const validatedInputs = validateForm(newInputs, inputId)
    setInputs(validatedInputs);
  }

  return {
    handleSubmit,
    handleInput,
    inputs,
  }
};
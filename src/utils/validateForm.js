const checkIfEmpty = (input) => {
  return input.value.trim() === '';
}

const checkIfPasswordIsDifferent = (password, repeatedPassword) => {
  return password !== repeatedPassword;
}

const checkIfEmailIsIncorrect = (input) => {
  return ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
}

export const validateForm = (inputs) => {
  const errors = [];
  for (let input in inputs) {
    if (inputs[input].required && checkIfEmpty(inputs[input])) {
      errors.push(`${inputs[input].label} is empty. Please fill it in`);
    }
    if (inputs[input].id === 'repeatPassword' && checkIfPasswordIsDifferent(inputs['password'].value, inputs[input].value)) {
      errors.push('Passwords must be identical')
    }
    if (inputs[input].id === 'email' && checkIfEmailIsIncorrect(inputs[input].value)) {
      errors.push('Email format is incorrect')
    }
  }

  return {
    inputErrors: errors,
    isFormValid: errors.length === 0,
  }
}
const checkIfEmpty = (input) => {
  return input.value.trim() === '';
}

const checkIfPasswordIsDifferent = (password, repeatedPassword) => {
  return password !== repeatedPassword;
}

const checkIfEmailIsIncorrect = (input) => {
  return ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
}

export const isFormValid = (inputs) => {
  for (const key of Object.keys(inputs)) {
    if (inputs[key].isEmpty || inputs[key].hasError) {
      return false
    }
  }
  return true
};

export const validateForm = (inputs) => {
  for (const input in inputs) {
    inputs[input].isEmpty = false;
    inputs[input].hasError = false;
    if (inputs[input].required && checkIfEmpty(inputs[input])) {
      inputs[input].isEmpty = true;
    }
    if (inputs[input].id === 'repeatPassword' && checkIfPasswordIsDifferent(inputs['password'].value, inputs[input].value)) {
      inputs.repeatPassword.hasError = true;
    }
    if (inputs[input].id === 'email' && checkIfEmailIsIncorrect(inputs[input].value)) {
      inputs.email.hasError = true;
    }
  }
  return inputs;
}
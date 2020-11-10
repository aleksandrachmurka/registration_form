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

export const validateForm = (inputs, id) => {
  const input = inputs[id];
  input.isEmpty = false;
  input.hasError = false;
  if (input.required && checkIfEmpty(input)) {
    input.isEmpty = true;
  }
  if (input.id === 'repeatPassword' && checkIfPasswordIsDifferent(inputs['password'].value, input.value)) {
    input.hasError = true;
  }
  if (input.id === 'email' && checkIfEmailIsIncorrect(input.value)) {
    input.hasError = true;
  }
  return { ...inputs, [id]: input };
}
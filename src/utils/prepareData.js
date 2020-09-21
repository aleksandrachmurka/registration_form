export const prepareData = (inputs) => ({
  firstName: inputs.firstName.value || '',
  userName: inputs.userName.value,
  password: inputs.password.value,
  repeatPassword: inputs.repeatPassword.value,
  email: inputs.email.value,
});
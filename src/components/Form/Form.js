import React from 'react';
import styles from './Form.module.css';

const Form = () => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Register</legend>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" placeholder="Add your first name (optional)" />
        <label htmlFor="userName">Username</label>
        <input type="text" id="userName" placeholder="Enter your username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Here goes the password " required />
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input type="password" id="repeatPassword" placeholder="Repeat you password" required />
        <label htmlFor="mail">Email</label>
        <input type="email" id="mail" placeholder="Enter your email " required />
      </fieldset>

      <button type="submit" className={styles.button}> Register </button>
    </form>
  )
}

// pattern
// minlength
export default Form;
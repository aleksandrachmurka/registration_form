import React from 'react';
import styles from './Form.module.css';
import { inputs } from '../../config/inputs';
import Input from '../Input/Input';

const Form = () => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Register</legend>
        {inputs.map(input => <Input input={input} key={input.id} />)}
      </fieldset>

      <button type="submit" className={styles.button}> Register </button>
    </form>
  )
}

export default Form;
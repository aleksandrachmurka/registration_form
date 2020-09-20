import React from 'react';
import styles from './Form.module.css';
import { elements } from '../../config/inputs';
import Input from '../Input/Input';
import { useForm } from '../../hooks/formHook';

const Form = () => {

  const { handleSubmit, handleInput, inputs } = useForm(passData);

  function passData() {
    const data = { ...inputs };
    console.log(data);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Register</legend>
        {elements.map(input => <Input input={input} key={input.id} changeHandler={handleInput} />)}
      </fieldset>
      <button type="submit" className={styles.button}> Register </button>
    </form>
  )
}

export default Form;
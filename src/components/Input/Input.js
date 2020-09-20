import React from 'react';
import styles from './Input.module.css'

const Input = ({ input }) => {
  console.log(input)
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={input.id}>{input.label}</label>
      <input className={styles.input} id={input.id} type={input.type} placeholder={input.placeholder} required={input.required} />
    </div>
  )
};

export default Input;
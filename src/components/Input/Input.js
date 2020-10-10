import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css'

const Input = ({ input, changeHandler }) => {
  const { id, label, type, placeholder, required } = input;
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input className={styles.input} id={id} type={type}
        placeholder={placeholder} required={required} onChange={changeHandler}
      />
    </div>
  )
};

Input.prototypes = {
  input: PropTypes.object.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default Input;
import React from 'react';
import styles from './Button.module.css';
import { buttonText } from '../../constants';

const Button = ({ isSubmitting }) => (
  <button type="submit" className={styles.button} disabled={isSubmitting}>
    {isSubmitting ? buttonText.registering : buttonText.register}
  </button>
);

export default Button;
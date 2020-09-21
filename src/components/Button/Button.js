import React from 'react';
import styles from './Button.module.css';

const Button = ({ isSubmitting }) => (
  <button type="submit" className={styles.button} disabled={isSubmitting}>
    {isSubmitting ? 'Registering...' : 'Register'}
  </button>
);

export default Button;
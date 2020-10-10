import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { buttonText } from '../../config/constants';

const Button = ({ isSubmitting }) => (
  <button type="submit" className={styles.button} disabled={isSubmitting}>
    {isSubmitting ? buttonText.registering : buttonText.register}
  </button>
);

Button.prototypes = {
  isSubmitting: PropTypes.bool,
};

export default Button;
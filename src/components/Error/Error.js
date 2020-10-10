import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.css'

const Error = ({ errors }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Please review errors and resubmit:</p>
      {errors.map((error, index) => <p key={index}>{error}</p>)}
    </div>
  )
};

Error.propTypes = {
  errors: PropTypes.array.isRequired,
};

export default Error;
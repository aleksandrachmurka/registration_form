import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const Backdrop = ({ show, close }) => (
  show && <div className={styles.backdrop} onClick={close}></div>
);

Backdrop.prototypes = {
  show: PropTypes.bool,
  close: PropTypes.func.isRequired,
};

export default Backdrop;
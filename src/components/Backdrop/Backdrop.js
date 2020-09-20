import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = ({ show, close }) => (
  show && <div className={styles.backdrop} onClick={close}></div>
);

export default Backdrop;
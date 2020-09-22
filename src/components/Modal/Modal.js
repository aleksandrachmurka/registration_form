import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const message = {
  success: 'Registered successfully!',
  error: 'Error occured while processing your registration request :(',
};

const Modal = ({ show, status, close }) => (
  <>
    <Backdrop show={show} close={close} />
    <div className={`${styles.modal} ${styles[status]} ${show ? styles.show : styles.hide}`}>
      <p className={styles.message}>
        {message[status]}
      </p>
    </div>
  </>
);

export default Modal;
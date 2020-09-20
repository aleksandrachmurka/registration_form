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
    <div className={`${styles.modal} ${styles[status]}`}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <p>
        {message[status]}
      </p>
    </div>
  </>
);

export default Modal;
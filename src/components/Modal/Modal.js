import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { modalMessage } from '../../constants';



const Modal = ({ show, status, close }) => (
  <>
    <Backdrop show={show} close={close} />
    <div className={`${styles.modal} ${styles[status]} ${show ? styles.show : styles.hide}`}>
      <p className={styles.message}>
        {modalMessage[status]}
      </p>
    </div>
  </>
);

export default Modal;
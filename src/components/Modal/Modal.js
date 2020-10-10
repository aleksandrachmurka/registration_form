import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { modalMessage } from '../../config/constants';

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

Modal.propTypes = {
  show: PropTypes.bool,
  status: PropTypes.string,
  close: PropTypes.func.isRequired,
};

export default Modal;
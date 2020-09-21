import React from 'react';
import { useState } from 'react';
import styles from './Form.module.css';
import { formInputs } from '../../config/inputs';
import { prepareData } from '../../utils/prepareData';
import { useForm } from '../../hooks/useForm';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

const Form = () => {
  const { handleSubmit, handleInput, inputs, errors } = useForm(handleFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({ show: false, status: '' });

  function closeModal() {
    setModal({ show: false, status: '' })
  }

  function handleFormData() {
    const data = prepareData(inputs);
    setIsSubmitting(true);
    sendFormData(data)
  }

  async function sendFormData(data) {
    try {
      const response = await fetch('https://registration-form-6c099.firebaseio.com/users.json', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      if (response.status === 200) {
        setIsSubmitting(false);
        console.log(data);
        setModal({ show: true, status: 'success' })
      }
    } catch {
      setIsSubmitting(false);
      setModal({ show: true, status: 'error' })
    }
  }

  return (
    <>
      <Modal show={modal.show} status={modal.status} close={closeModal} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Register</legend>
          {
            Object.keys(formInputs)
              .map(input => <Input input={formInputs[input]} key={formInputs[input].id} changeHandler={handleInput} />)
          }
        </fieldset>
        {errors && errors.map(error => <p>{error}</p>)}
        <Button isSubmitting={isSubmitting} />
      </form>
    </>
  )
};

export default Form;
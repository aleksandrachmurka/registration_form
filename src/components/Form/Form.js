import React from 'react';
import { useState } from 'react';
import styles from './Form.module.css';
import { formInputs } from '../../config/inputs';
import { url, statuses } from '../../constants';
import { prepareData } from '../../utils/prepareData';
import { useForm } from '../../hooks/useForm';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Error from '../Error/Error';



const Form = () => {
  const { handleSubmit, handleInput, inputs, errors } = useForm(handleFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({ show: false, status: '' });

  function handleFormData() {
    const data = prepareData(inputs);
    setIsSubmitting(true);
    sendFormData(data)
  }

  async function sendFormData(data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
      })

      if (response.status === 200) {
        handleSuccess(data);
      }
    } catch {
      handleError();
    }
  }

  function handleSuccess(data) {
    setIsSubmitting(false);
    console.log(data);
    setModal({ show: true, status: statuses.success });
  }

  function handleError() {
    setIsSubmitting(false);
    setModal({ show: true, status: statuses.error });
  }

  function closeModal() {
    setModal({ show: false, status: '' });
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
        {errors.length !== 0 && <Error errors={errors} />}
        <Button isSubmitting={isSubmitting} />
      </form>
    </>
  )
};

export default Form;
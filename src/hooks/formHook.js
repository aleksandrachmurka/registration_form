import { useState } from 'react';
import { formInputs } from '../config/inputs';

export const useForm = (callback) => {
    const [inputs, setInputs] = useState(formInputs);

    const handleSubmit = e => {
        if (e) {
            e.preventDefault();
        }
        callback();
        e.target.reset();
        setInputs(inputs => inputs = {})
    }

    const handleInput = e => {
        e.persist();
        setInputs(inputs => ({ ...inputs, [e.target.id]: { ...inputs[e.target.id], value: e.target.value } }))
    }

    return {
        handleSubmit,
        handleInput,
        inputs
    }
}
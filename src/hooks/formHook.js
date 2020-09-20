import { useState } from 'react';

export const useForm = (callback) => {
    const [inputs, setInputs] = useState([]);

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
        setInputs(inputs => ({ ...inputs, [e.target.id]: e.target.value }))
    }

    return {
        handleSubmit,
        handleInput,
        inputs
    }
}
// useForm.js

import { useState } from "react";
import { validateName, validateEmail, validatePassword, validateRepeatPassword } from '../lib/validations';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};

        if (!validateName(values.username)) {
            tempErrors.username = 'Name should be at least 4 characters';
        }

        if (!validateEmail(values.email)) {
            tempErrors.email = 'Email should be valid and at least 10 characters long';
        }

        if (!validatePassword(values.password)) {
            tempErrors.password = 'Password should be at least 6 characters';
        }

        if (!validateRepeatPassword(values.password, values.repeatPassword)) {
            tempErrors.repeatPassword = 'Passwords do not match';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmitHandler(values);
        }
    };

    return {
        values,
        errors,
        changeHandler,
        onSubmit
    };
};

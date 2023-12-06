import { useState } from "react";
import * as validations from '../lib/validations';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');

    const validate = () => {
        let tempErrors = {};

        if (values.username !== undefined && !validations.validateName(values.username)) {
            tempErrors.username = 'Name should be at least 4 characters';
        }

        if (values.email !== undefined && !validations.validateEmail(values.email)) {
            tempErrors.email = 'Email should be valid and at least 10 characters long';
        }

        if (values.password !== undefined && !validations.validatePassword(values.password)) {
            tempErrors.password = 'Password should be at least 6 characters';
        }

        if (values.repeatPassword !== undefined && !validations.validateRepeatPassword(values.password, values.repeatPassword)) {
            tempErrors.repeatPassword = 'Passwords do not match';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                await onSubmitHandler(values);
                setServerError(''); 
            } catch (error) {
                setServerError(error.message); 
            }
        }
    };

    return {
        values,
        errors,
        serverError,
        changeHandler,
        onSubmit
    };
};

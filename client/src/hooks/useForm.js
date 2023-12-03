// useForm.js

import { useState } from "react";
import { validateName, validateEmail, validatePassword, validateRepeatPassword } from '../lib/validations';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};

        if (values.username !== undefined && !validateName(values.username)) {
            tempErrors.username = 'Name should be at least 4 characters';
        }

        if (values.email !== undefined && !validateEmail(values.email)) {
            tempErrors.email = 'Email should be valid and at least 10 characters long';
        }

        if (values.password !== undefined && !validatePassword(values.password)) {
            tempErrors.password = 'Password should be at least 6 characters';
        }

        if (values.repeatPassword !== undefined && !validateRepeatPassword(values.password, values.repeatPassword)) {
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
;



// import { useState } from "react";

// export const useForm = (initialValues, onSubmitHandler) => {
//     const [values, setValues] = useState(initialValues);

//     const changeHandler = (e) => {
//         setValues(state => ({ 
//             ...state, 
//             [e.target.name]: e.target.value 
//         }));
//     };

//     const onSubmit = (e) => {
//         e.preventDefault();

//         // if (onSubmitHandler) {
//             onSubmitHandler(values);
//         // }
//     };

//     return {
//         values,
//         changeHandler,
//         onSubmit
//     }
// };

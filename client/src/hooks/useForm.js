import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        console.log(e.target.value);
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (onSubmitHandler) {
            onSubmitHandler(values);
        }
    };

    return {
        values,
        changeHandler,
        onSubmit
    }
};

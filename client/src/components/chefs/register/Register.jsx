import React, { useContext } from 'react';
import styles from './Register.module.css';
import { useForm } from '../../../hooks/useForm';
import AuthContext from '../../../contexts/authContext';

function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);

    const initialValues = {
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
    };

    const { values, errors, changeHandler, onSubmit } = useForm(initialValues, onRegisterSubmit);

    return (
        <form className={styles.formContainer} onSubmit={onSubmit}>
            <h2>Register</h2>

            <div className={styles.registerFormDiv}>
                <label htmlFor="username">Name</label>
                <input
                    className={styles.registerFormInputs}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={changeHandler}
                />
                {errors.username && <p className={styles.errorMsg}>{errors.username}</p>}
            </div>

            <div className={styles.registerFormDiv}>
                <label htmlFor="email">Email</label>
                <input
                    className={styles.registerFormInputs}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={changeHandler}
                />
                {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
            </div>

            <div className={styles.registerFormDiv}>
                <label htmlFor="password">Password</label>
                <input
                    className={styles.registerFormInputs}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={changeHandler}
                />
                {errors.password && <p className={styles.errorMsg}>{errors.password}</p>}
            </div>

            <div className={styles.registerFormDiv}>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input
                    className={styles.registerFormInputs}
                    type="password"
                    name="repeatPassword"
                    id="repeatPassword"
                    placeholder="Repeat password"
                    value={values.repeatPassword}
                    onChange={changeHandler}
                />
                {errors.repeatPassword && <p className={styles.errorMsg}>{errors.repeatPassword}</p>}
            </div>

            <div className={styles.registerFormDiv}>
                <button className={styles.regButton} type="submit">Register</button>
            </div>
        </form>
    );
}

export default Register;

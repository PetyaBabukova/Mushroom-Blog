import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css';
import AuthContext from '../../../contexts/authContext';
import { useForm } from '../../../hooks/useForm';

function Login() {
    const { onLoginSubmit } = useContext(AuthContext);

    const { values, errors, serverError, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    return (
        <Form className={styles.formContainer} onSubmit={onSubmit}>
             <h2>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name='email'
                    onChange={changeHandler}
                    value={values.email}
                />
                {errors.email && <div className={styles.errorMsg}>{errors.email}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name='password'
                    onChange={changeHandler}
                    value={values.password}
                />
                {errors.password && <div className={styles.errorMsg}>{errors.password}</div>}
            </Form.Group>

            {serverError && <div className={styles.errorMsg}>{serverError}</div>}

            <button className={styles.loginBtn} type="submit">
                Login
            </button>
        </Form>
    );
}

export default Login;

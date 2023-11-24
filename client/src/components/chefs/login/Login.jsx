import Form from 'react-bootstrap/Form';
import { useContext } from 'react';

import styles from './Login.module.css'
import AuthContext from '../../../contexts/authContext';
import { useForm } from '../../../hooks/useForm';

const LoginFormKeys = {
  EMAIL: 'email',
  PASSWORD: 'password'
};

function Login() {

  const { onLoginSubmit } = useContext(AuthContext);

  const { values, changeHandler, onSubmit } = useForm({
    [LoginFormKeys.EMAIL]: '',
    [LoginFormKeys.PASSWORD]: '',
  }, onLoginSubmit)

  return (
    <Form className={styles.formContainer} onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h2 className={styles.heading}>Login</h2>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name='email'
          onChange={changeHandler}
          value={values[LoginFormKeys.EMAIL]}

        />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name='password'
          onChange={changeHandler}
          value={values[LoginFormKeys.PASSWORD]}

        />
      </Form.Group>

      <button className={styles.loginBtn} variant="primary" type="submit">
        Login
      </button>
    </Form>
  );
}

export default Login;
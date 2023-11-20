import Form from 'react-bootstrap/Form';

import styles from './Login.module.css'

function Login() {
  
  return (
    <Form className={styles.formContainer}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <h2 className={styles.heading}>Login</h2>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>

      <button className={styles.loginBtn} variant="primary" type="submit">
        Login
      </button>
    </Form>
  );
}

export default Login;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Register.module.css'
import { useState } from 'react';

function Register() {

    const onRegisterSubmitHandler = ()=>{

        const initialValues = {
            email: '',
            password: '',
            repeatPassword: ''
        }
        const [registerValues, setRegisterValues] = useState(initialValues);
    }
  
  return (
    <Form className={styles.formContainer}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h2 className={styles.heading}>Register</h2>
        <Form.Label>Email address</Form.Label>

        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        name='email'
        // value={email}
        />

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>

        <Form.Control 
        type="password" 
        placeholder="Password" 
        name='password'
        // value={password}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat Password</Form.Label>

        <Form.Control 
        type="password" 
        placeholder="Repeat Password" 
        name='repeatPassword'
        // value={repeatPassword}
        />
      </Form.Group>

      <button 
      className={styles.loginBtn} 
      variant="primary" 
      type="submit"
      >
        Register
      </button>
    </Form>
  );
}

export default Register;
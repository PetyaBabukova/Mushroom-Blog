import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Register.module.css'
import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';


function Register() {

  const onRegisterSubmit = () => {

    
  }

  const initialValues = {
    email: '',
    password: '',
    repeatPassword: ''
  }

  const { formValues, onChangeHandler, onSubmit } = useForm(initialValues, onRegisterSubmit);


  return (

    <form className={styles.formContainer} onSubmit={onRegisterSubmit}>
      <h2>Register</h2>

      <div className={styles.registerFormDiv}>
        <label htmlFor="email">Email</label>
        <input className={styles.registerFormInputs}
          type="email"
          name='email'
          id='email'
          placeholder="Enter email"
          value={formValues.email}
          onChange={onChangeHandler}
        />
      </div>


      <div className={styles.registerFormDiv}>
        <label htmlFor="password">Password</label>
        <input className={styles.registerFormInputs}
          type="password"
          name='password'
          id='password'
          placeholder="Enter password"
          value={formValues.password}
          onChange={onChangeHandler}
        />
      </div>

      <div className={styles.registerFormDiv}>
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input className={styles.registerFormInputs}
          type="password"
          name='repeatPassword'
          id='repeatPassword'
          placeholder="Enter Repeat Password"
          value={formValues.repeatPassword}
          onChange={onChangeHandler}
        />
      </div>

      <div className={styles.registerFormDiv}>
        <button className={styles.regButton} type="submit" >Register</button>
      </div>

    </form>

  );
}

export default Register;
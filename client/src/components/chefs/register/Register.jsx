import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Register.module.css'
import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';


function Register() {

  

  const initialValues = {
    email: '',
    password: '',
    repeatPassword: '',
    name: '',
    imageUrl: '',
    spec: '',
    bio: '',
    motto: '',
  }

   const { formValues, onChangeHandler, onSubmit } = useForm(initialValues, onRegisterSubmit);


  return (

    <form className={styles.formContainer} onSubmit={onSubmit}>
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
        <label htmlFor="name">Name</label>
        <input className={styles.registerFormInputs}
          type="text"
          name='name'
          id='name'
          placeholder="Enter your name"
          value={formValues.name}
          onChange={onChangeHandler}
        />
      </div>

      <div className={styles.registerFormDiv}>
        <label htmlFor="imageUrl">ImageUrl</label>
        <input className={styles.registerFormInputs}
          type="text"
          name='imageUrl'
          id='imageUrl'
          placeholder="Link to your image Url"
          value={formValues.imageUrl}
          onChange={onChangeHandler}
        />
      </div>

      <div className={styles.registerFormDiv}>
        <label htmlFor="spec">ImageUrl</label>
        <input className={styles.registerFormInputs}
          type="text"
          name='spec'
          id='spec'
          placeholder="Write a brief description of your specialization"
          value={formValues.spec}
          onChange={onChangeHandler}
        />
      </div>

      <div className={styles.registerFormDiv}>
        <label htmlFor="bio">ImageUrl</label>
        <input className={styles.registerFormInputs}
          type="text"
          name='bio'
          id='bio'
          placeholder="Write a short BIO"
          value={formValues.bio}
          onChange={onChangeHandler}
        />
      </div>

      <div className={styles.registerFormDiv}>
        <label htmlFor="motto">ImageUrl</label>
        <input className={styles.registerFormInputs}
          type="text"
          name='motto'
          id='motto'
          placeholder="Write your Motto"
          value={formValues.motto}
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
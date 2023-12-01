import styles from './Register.module.css'
import { useContext, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import AuthContext from '../../../contexts/authContext';


function Register() {

	const { onRegisterSubmit } = useContext(AuthContext);

	const initialValues = {
		username: '',
		email: '',
		password: '',
		repeatPassword: '',
	}

	const { values, changeHandler, onSubmit } = useForm(initialValues, onRegisterSubmit);


	return (

		<form className={styles.formContainer} onSubmit={onSubmit}>
			<h2>Register</h2>

			<div className={styles.registerFormDiv}>
				<label htmlFor="username">Name</label>
				<input className={styles.registerFormInputs}
					type="text"
					name='username'
					id='username'
					placeholder="Enter your username"
					value={values.username}
					onChange={changeHandler}
				/>
			</div>

			<div className={styles.registerFormDiv}>
				<label htmlFor="email">Email</label>
				<input className={styles.registerFormInputs}
					type="email"
					name='email'
					id='email'
					placeholder="Enter email"
					value={values.email}
					onChange={changeHandler}
				/>
			</div>


			<div className={styles.registerFormDiv}>
				<label htmlFor="password">Password</label>
				<input className={styles.registerFormInputs}
					type="password"
					name='password'
					id='password'
					placeholder="Enter password"
					value={values.password}
					onChange={changeHandler}
				/>
			</div>

			<div className={styles.registerFormDiv}>
				<label htmlFor="repeatPassword">Repeat Password</label>
				<input className={styles.registerFormInputs}
					type="password"
					name='repeatPassword'
					id='repeatPassword'
					placeholder="Enter Repeat Password"
					value={values.repeatPassword}
					onChange={changeHandler}
				/>
			</div>

			<div className={styles.registerFormDiv}>
				<button className={styles.regButton} type="submit" >Register</button>
			</div>

		</form>

	);
}

export default Register;
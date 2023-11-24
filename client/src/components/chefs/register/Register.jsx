import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Register.module.css'
import { useContext, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import AuthContext from '../../../contexts/authContext';


function Register() {

	const {onRegisterSubmit} = useContext(AuthContext);

	const initialValues = {
		email: '',
		password: '',
		repeatPassword: '',
		username: '',
		imageUrl: '',
		spec: '',
		bio: '',
		motto: '',
	}

	const { values, changeHandler, onSubmit } = useForm(initialValues, onRegisterSubmit);


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
				<label htmlFor="imageUrl">ImageUrl</label>
				<input className={styles.registerFormInputs}
					type="text"
					name='imageUrl'
					id='imageUrl'
					placeholder="Link to your image Url"
					value={values.imageUrl}
					onChange={changeHandler}
				/>
			</div>

			<div className={styles.registerFormDiv}>
				<label htmlFor="spec">Specialization</label>
				<input className={styles.registerFormInputs}
					type="text"
					name='spec'
					id='spec'
					placeholder="Write a brief description of your specialization"
					value={values.spec}
					onChange={changeHandler}
				/>
			</div>

			<div className={styles.registerFormDiv}>
				<label htmlFor="bio">BIO</label>
				<input className={styles.registerFormInputs}
					type="text"
					name='bio'
					id='bio'
					placeholder="Write a short BIO"
					value={values.bio}
					onChange={changeHandler}
				/>
			</div>

			<div className={styles.registerFormDiv}>
				<label htmlFor="motto">Motto</label>
				<input className={styles.registerFormInputs}
					type="text"
					name='motto'
					id='motto'
					placeholder="Write your Motto"
					value={values.motto}
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
import styles from './EditProfile.module.css';
import { useContext } from 'react';
import { useForm } from '../../../hooks/useForm';
import ProfileContext from '../../../contexts/profileContext';

function EditProfile() {
    const { onEditProfileSubmit } = useContext(ProfileContext);

    const initialValues = {
        name: '',
        imageUrl: '',
        spec: '',
        bio: '',
        motto: '',
    };
    const { values, changeHandler, onSubmit } = useForm(initialValues, onEditProfileSubmit);

	
	return (

		<form className={styles.formContainer} onSubmit={onSubmit}>
			<h2>Edit Profile</h2>

			<div className={styles.registerFormDiv}>
				<label htmlFor="name">Name</label>
				<input className={styles.registerFormInputs}
					type="text"
					name='name'
					id='name'
					placeholder="Enter your name"
					value={values.name}
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
};

export default EditProfile;
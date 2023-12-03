// SetProfile.module.css

import React, { useContext, useState } from 'react';
import styles from './SetProfile.module.css';
import { useForm } from '../../../hooks/useForm';
import ProfileContext from '../../../contexts/profileContext';

function SetProfile() {
    const { onSetProfileSubmit } = useContext(ProfileContext);
    const [errors, setErrors] = useState({});

    const initialValues = {
        name: '',
        imageUrl: '',
        spec: '',
        bio: '',
        motto: '',
    };

    const { values, changeHandler, onSubmit } = useForm(initialValues, async (data) => {
        const result = await onSetProfileSubmit(data);
        if (!result.isValid) {
            setErrors(result.errors);
        } else {
            setErrors({});
        }
    });

    return (
        <form className={styles.formContainer} onSubmit={onSubmit}>
            <h2>Set Profile</h2>

            <div className={styles.registerFormDiv}>
                <label htmlFor="name">Name</label>
                <input
                    className={styles.registerFormInputs}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={changeHandler}
                />
                {errors.name && <div className={styles.errorMsg}>{errors.name}</div>}
            </div>

            <div className={styles.registerFormDiv}>
                <label htmlFor="imageUrl">ImageUrl</label>
                <input
                    className={styles.registerFormInputs}
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    placeholder="Link to your image Url"
                    value={values.imageUrl}
                    onChange={changeHandler}
                />
                {errors.imageUrl && <div className={styles.errorMsg}>{errors.imageUrl}</div>}
            </div>

            <div className={styles.registerFormDiv}>
                <label htmlFor="spec">Specialization</label>
                <input
                    className={styles.registerFormInputs}
                    type="text"
                    name="spec"
                    id="spec"
                    placeholder="Write a brief description of your specialization"
                    value={values.spec}
                    onChange={changeHandler}
                />
                {errors.spec && <div className={styles.errorMsg}>{errors.spec}</div>}
            </div>

            <div className={styles.registerFormDiv}>
                <label htmlFor="bio">BIO</label>
                <input
                    className={styles.registerFormInputs}
                    type="text"
                    name="bio"
                    id="bio"
                    placeholder="Write a short BIO"
                    value={values.bio}
                    onChange={changeHandler}
                />
                {errors.bio && <div className={styles.errorMsg}>{errors.bio}</div>}
            </div>

            <div className={styles.registerFormDiv}>
                <label htmlFor="motto">Motto</label>
                <input
                    className={styles.registerFormInputs}
                    type="text"
                    name="motto"
                    id="motto"
                    placeholder="Write your Motto"
                    value={values.motto}
                    onChange={changeHandler}
                />
                {errors.motto && <div className={styles.errorMsg}>{errors.motto}</div>}
            </div>

            <div className={styles.registerFormDiv}>
                <button className={styles.regButton} type="submit">Submit</button>
            </div>
        </form>
    );
}

export default SetProfile;

import styles from './EditProfile.module.css';
import { useContext, useEffect, useState } from 'react';
import * as chefService from '../../../services/chefServise';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext';
import * as validations from '../../../lib/validations'; 

function EditProfile() {
  const { userId } = useContext(AuthContext);
  const { profileId } = useParams();
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: '',
    imageUrl: '',
    spec: '',
    bio: '',
    motto: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (profileId) {
      fetch(`http://localhost:3030/data/teams/${profileId}`)
        .then((res) => res.json())
        .then((existingProfile) => {
          setProfile(existingProfile);
        });
    }
  }, [profileId]);

  const onEditProfileSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    Object.keys(profile).forEach(key => {
        const isImageUrl = key === 'imageUrl';
        const error = validations.validateProfileField(profile[key], isImageUrl);
        if (error) {
            validationErrors[key] = error;
        }
    });

    console.log("Validation Errors:", validationErrors);

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    try {
        const data = {
            name: profile.name,
            imageUrl: profile.imageUrl,
            spec: profile.spec,
            bio: profile.bio,
            motto: profile.motto,
        };

        await chefService.editProfile(profileId, data);
        navigate(`/${userId}/view-profile`);
    } catch (error) {
        console.log('Error updating profile', error);
    }
};

  const changeHandler = (e) => {
    setProfile((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <form className={styles.formContainer} onSubmit={onEditProfileSubmit}>
      <h2>Edit Profile</h2>

      <div className={styles.registerFormDiv}>
        <label htmlFor="name">Name</label>
        <input
          className={styles.registerFormInputs}
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={profile.name}
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
          value={profile.imageUrl}
          onChange={changeHandler}
        />
                {errors.name && <div className={styles.errorMsg}>{errors.name}</div>}

      </div>

      <div className={styles.registerFormDiv}>
        <label htmlFor="spec">Specialization</label>
        <input
          className={styles.registerFormInputs}
          type="text"
          name="spec"
          id="spec"
          placeholder="Write a brief description of your specialization"
          value={profile.spec}
          onChange={changeHandler}
        />
                {errors.name && <div className={styles.errorMsg}>{errors.name}</div>}

      </div>

      <div className={styles.registerFormDiv}>
        <label htmlFor="bio">BIO</label>
        <input
          className={styles.registerFormInputs}
          type="text"
          name="bio"
          id="bio"
          placeholder="Write a short BIO"
          value={profile.bio}
          onChange={changeHandler}
        />
                {errors.name && <div className={styles.errorMsg}>{errors.name}</div>}

      </div>

      <div className={styles.registerFormDiv}>
        <label htmlFor="motto">Motto</label>
        <input
          className={styles.registerFormInputs}
          type="text"
          name="motto"
          id="motto"
          placeholder="Write your Motto"
          value={profile.motto}
          onChange={changeHandler}
        />
                {errors.name && <div className={styles.errorMsg}>{errors.name}</div>}

      </div>

      <div className={styles.registerFormDiv}>
        <button className={styles.regButton} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default EditProfile;
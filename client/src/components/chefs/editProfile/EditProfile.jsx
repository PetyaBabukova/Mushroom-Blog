import styles from './EditProfile.module.css';
import { useContext, useEffect, useState } from 'react';
import * as chefService from '../../../services/chefServise';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext';

function EditProfile() {
  const { userId } = useContext(AuthContext);
  const { profileId } = useParams();
  const navigate = useNavigate();

  console.log(profileId);

  // Initialize profile state with default values
  const [profile, setProfile] = useState({
    name: '',
    imageUrl: '',
    spec: '',
    bio: '',
    motto: '',
  });

  // Fetch existing profile data when the component mounts
  useEffect(() => {
    if (profileId) {
      fetch(`http://localhost:3030/data/teams/${profileId}`)
        .then((res) => res.json())
        .then((existingProfile) => {
          console.log(existingProfile);
          setProfile(existingProfile);
        });
    }
  }, [profileId]);

  const onEditProfileSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      imageUrl: e.target.imageUrl.value,
      spec: e.target.spec.value,
      bio: e.target.bio.value,
      motto: e.target.motto.value,
    };

    try {
      await chefService.editProfile(profileId, data);
      navigate(`/${userId}/view-profile`);
    } catch (error) {
      console.log('Error updating profile', error);
    }
  };

  const changeHandler = (e) => {
    // Update the profile state when input fields change
    setProfile((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
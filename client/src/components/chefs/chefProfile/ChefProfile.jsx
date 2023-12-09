import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styles from './ChefProfile.module.css';
import * as chefService from '../../../services/chefService';
import AuthContext from '../../../contexts/authContext';
import ProfileContext from '../../../contexts/profileContext';

function ChefProfile() {
  const navigate = useNavigate()
  const { userId } = useContext(AuthContext);
  const { onDeleteProfile } = useContext(ProfileContext);
  const [chef, setChef] = useState({});

  useEffect(() => {
    chefService.getOne(userId)
      .then(chefProfile => {
        if (chefProfile) {
          setChef(chefProfile);
        } else {
          console.log('Chef profile not found');
        }
      })
      .catch(error => {
        console.error('Error fetching chef profile:', error);
      });
  }, [userId]);

  const profileId = chef._id;
  console.log(profileId);

  const onDeleteProfileClick = async () => {
    const confirmRemoveProfile = confirm(`Do you want to delete your profile?`);
    if (confirmRemoveProfile) {
        await onDeleteProfile(chef._id);
        navigate('/');
    }
};

// console.log(userId);

  return (
    <div className={styles.chefProfile}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={chef.imageUrl} alt='Chef Image' />
      </div>
      <div className={styles.details}>
        <h2>Chef {chef.name}</h2>
        <p className={styles.motto}>motto: {chef.motto}</p>
        <p className={styles.bio}>{chef.bio}</p>
        <div className={styles.actions}>
        <Link to={`/${profileId}/edit-profile`} className={styles.chefProfileBtn} > Edit Profile </Link>
          <button className={styles.chefProfileBtn} onClick={() => onDeleteProfileClick(profileId)}>Delete Profile</button>
        </div>
        <div className={styles.footer}>
        </div>
      </div>
    </div>
  );
}

export default ChefProfile;

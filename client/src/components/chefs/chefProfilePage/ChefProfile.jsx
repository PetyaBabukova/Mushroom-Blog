import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './ChefProfile.module.css';
import * as chefService from '../../../services/chefServise';
import AuthContext from '../../../contexts/authContext';
import ProfileContext from '../../../contexts/profileContext';


function ChefProfile() {
  const { userId } = useContext(AuthContext);
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

  return (
    <div className={styles.chefProfile}>
      <div className={styles.imageContainer}>
        <img src={chef.imageUrl} alt='Chef Image' />
      </div>
      <div className={styles.details}>
        <h2>Chef {chef.name}</h2>
        <p className={styles.motto}>motto: {chef.motto}</p>
        <p className={styles.bio}>{chef.bio}</p>
        <div className={styles.actions}>
        <Link to={`/${profileId}/edit-profile`} className={styles.chefProfileBtn} > Edit Profile </Link>
          <button className={styles.chefProfileBtn}>delete</button>
          <button className={styles.chefProfileBtn}>like</button>
        </div>
        <div className={styles.footer}>
          <span className={styles.rating}>Rating: {chef.rating}</span>
          <span className={styles.dishes}>Dishes</span>
        </div>
      </div>
    </div>
  );
}

export default ChefProfile;

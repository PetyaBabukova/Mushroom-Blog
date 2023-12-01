import { useContext, useEffect, useState } from 'react';
import styles from './ChefProfile.module.css';
import * as chefService from '../../../services/chefServise'
import AuthContext from '../../../contexts/authContext';
import { useParams } from 'react-router-dom';

function ChefProfile() {
  const {userId} = useParams()
    const [chef, setChef] = useState({});

    useEffect(() => {
        chefService.getOne(userId)
            .then(res=> console.log(res))
            .then(result => {
                setChef(result[0])
                // console.log(result);
                // console.log(chef);
            });
    }, [])

    return (
        <div className={styles.chefProfile}>
            <div className={styles.imageContainer}>
        <img src={chef.image} alt='Chef Image' />
      </div>
      <div className={styles.details}>
        <h2>Chef {chef.firstName} {chef.lastName}</h2>
        <p className={styles.motto}>motto: {chef.motto}</p>
        <p className={styles.bio}>{chef.bio}</p>
        <div className={styles.actions}>
          <button className={styles.chefProfileBtn}>edit</button>
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

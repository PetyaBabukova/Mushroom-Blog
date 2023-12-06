import styles from './OurTeamCard.module.css';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext';
import * as chefService from '../../../services/chefServise';
import ProfileContext from '../../../contexts/profileContext';



function OurTeamCard({
  name,
  imageUrl,
  bio,
  motto,
  spec,
  _ownerId
}) {

// const {_ownerId} = useContext(ProfileContext)
  return (
    <div className={styles.chefCard} >
      <img src={imageUrl} alt="Image" />
      <h2>{name}</h2>
      <h4 className={styles.motto}>{motto}</h4>
      <h5 className={styles.spec}>{spec}</h5>
      <p>{bio}</p>
      <div className={styles.chefProfileLinkContainer}>
        <Link to={`/${_ownerId}/dishes`} className={styles.chefProfileLink} > Chef {name} recipes</Link>
      </div>
    </div>
  );
}

export default OurTeamCard;

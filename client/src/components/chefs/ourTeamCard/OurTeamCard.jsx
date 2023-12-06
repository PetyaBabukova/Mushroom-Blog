import styles from './OurTeamCard.module.css';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function OurTeamCard({
  name,
  imageUrl,
  bio,
  motto,
  spec,
  _ownerId
}) {

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
};

export default OurTeamCard;

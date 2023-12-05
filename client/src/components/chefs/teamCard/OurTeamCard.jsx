import { useContext } from 'react';
import styles from './OurTeamCard.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext';



function OurTeamCard({
  name,
  email,
  phoneNumber,
  imageUrl,
  bio,
  motto,
  spec
}) {

  const { userId, username } = useContext(AuthContext)

  return (
    <div className={styles.chefCard} >
      <img src={imageUrl} alt="Image" />
      <h2>{name}</h2>
      <h4 className={styles.motto}>{motto}</h4>
      <h5 className={styles.spec}>{spec}</h5>
      <p>{bio}</p>
      <div className={styles.chefProfileLinkContainer}>
        <Link to={`/${userId}/dishes`} className={styles.chefProfileLink}> View Chef {username} recipes</Link>
      </div>
    </div>
  );
}

export default OurTeamCard;

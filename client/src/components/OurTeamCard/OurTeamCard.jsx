import styles from './OurTeamCard.module.css';

function OurTeamCard({
    firstName,
    lastName,
    email,
    phoneNumber,
    image,
    bio,
    motto,
    spec
}) {

  return (
    <div className={styles.chefCard} >
      <img src={image} alt="Image" />
      <h2>{firstName} {lastName}</h2>
      <h4 className={styles.motto}>{motto}</h4>
      {/* <h3>{spec}</h3> */}
      <p>{bio}</p>
    </div>
  );
}

export default OurTeamCard;

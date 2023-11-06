import styles from './OurTeamCard.module.css';

function OurTeamCard({
    firstName,
    lastName,
    email,
    phoneNumber,
    image,
    bio
}) {
  return (
    <div className={styles.chefCard}>

      <img src={image} alt="Image" />
      <h2>{firstName} {lastName}</h2>
      <h3>{email}</h3>
      {/* <h4>{author}</h4> */}
      <p>{bio}</p>
    </div>
  );
}

export default OurTeamCard;

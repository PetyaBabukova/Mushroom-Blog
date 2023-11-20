import styles from './DishCard.module.css';
import { Link } from 'react-router-dom';

function DishCard({
  title,
  ingredients,
  description,
  author,
  image,
  optionalExtras,
  subtitle,
  shortDescription,
  id
}) {
  return (
    <Link to={`/${id}/details`} className={styles.dish}>


      <img src={image} alt="Image" />
      <h2 className={styles.title}>{title}</h2>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <p>{shortDescription}</p>
      <p className={styles.author}>{author}</p>
    </Link>
  );
}

export default DishCard;

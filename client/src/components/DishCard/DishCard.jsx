import styles from './DishCard.module.css';

function DishCard({
  title,
  ingredients,
  description,
  author,
  image,
  optionalExtras,
  subtitle,
  shortDescription
}) {
  return (
    <article className={styles.dish}>

      <img src={image} alt="Image" />
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <p>{shortDescription}</p>
      <h4>{author}</h4>
    </article>
  );
}

export default DishCard;

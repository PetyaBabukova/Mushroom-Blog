import styles from './Article.module.css';

function Article({
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
    <article className={styles.article}>

      <img src={image} alt="Description" />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <h4>{author}</h4>
      <p>{shortDescription}</p>
    </article>
  );
}

export default Article;

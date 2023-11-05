import React from 'react';
import styles from './Article.module.css';

function Article() {
  return (
    <article className={styles.article}>

      <img src="https://insanelygoodrecipes.com/wp-content/uploads/2020/11/Fried-Mushrooms-with-Herbs.png" alt="Description" />
      <h2>Title</h2>
      <h3>Subtitle</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in exercitationem maxime quam nisi reiciendis corrupti tempora, quibusdam enim illum neque debitis quidem sapiente molestiae optio dolore. Ducimus amet voluptatem doloribus recusandae ex accusamus labore natus? Amet numquam sunt deleniti, enim pariatur vitae delectus natus autem illum animi quam corporis!</p>
    </article>
  );
}

export default Article;

import { useEffect, useState } from 'react';
import Article from '../Article/Article';
import styles from './BlogArticles.module.css';

import * as articleService from '../../services/articleService'

function BlogArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleService.getAll()
      .then(articles => {
        setArticles(Object.values(articles))
      })
  }, [])
  return (
    <div className={styles.blogArticles}>
      {articles.map((article) => (
        <Article
			key={article._id}
			title={article.title}
			ingredients={article.ingredients}
			description={article.description}
			author={article.author}
			image={article.image}
			optionalExtras={article.optionalExtras}
			subtitle={article.subtitle}
			shortDescription={article.shortDescription}

        />

      ))}

    </div>
  );
}

export default BlogArticles;

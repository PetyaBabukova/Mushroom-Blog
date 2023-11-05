import React from 'react';
import Article from '../Article/Article';
import styles from './BlogArticles.module.css';

function BlogArticles() {
  return (
    <div className={styles.blogArticles}>
      {/* Repeat the Article component as needed */}
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      {/* ... */}
    </div>
  );
}

export default BlogArticles;

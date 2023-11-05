import React from 'react';
import Profile from '../Profile/Profile';
import BlogArticles from '../BlogArticles/BlogArticles';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.mainContainer}>
      <Profile />
      <BlogArticles />
    </div>
  );
}

export default Main;

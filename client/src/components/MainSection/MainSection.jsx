import React from 'react';
import Profile from '../Profile/Profile';
import BlogArticles from '../BlogArticles/BlogArticles';
import styles from './MainSection.module.css';
import OurTeam from '../OurTeam/OurTeam';

function Main({
}) {
  return (
    <div className={styles.mainContainer}>
      <Profile  />
      {/* <BlogArticles /> */}
      <OurTeam />
      
    </div>
  );
}

export default Main;

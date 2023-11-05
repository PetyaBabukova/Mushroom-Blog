import React from 'react';
import styles from './Hero.module.css';
import heroImage from '../../assets/hero-image.jpg'; 

function Hero() {
  return (
    <div className={styles.hero}>
      <img src={heroImage} alt="Hero" className={styles.heroImage} />
      <div className={styles.slogan}>
        Discover the Unexplored Flavors of Nature
      </div>
    </div>
  );
}

export default Hero;

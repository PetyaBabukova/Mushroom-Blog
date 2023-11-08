import React from 'react';
import styles from './Hero.module.css';
import heroImage from '../../assets/hero-image_lower.jpg'; 
import CreateDishBtn from '../CreateDishBtn/CreateDishBtn';

function Hero() {
  return (
    <div className={styles.hero}>
      <img src={heroImage} alt="Hero" className={styles.heroImage} />
      <div className={styles.slogan}>
        Discover the Unexplored Flavors of Nature
      </div>
      <div className={styles.createDishBtnContainer}> 
        <CreateDishBtn />
      </div>
    </div>
  );
}

export default Hero;

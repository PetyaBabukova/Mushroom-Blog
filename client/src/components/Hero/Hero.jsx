import React, { useContext } from 'react';
import styles from './Hero.module.css';
import heroImage from '../../assets/hero-image_lower.jpg';
import CreateDishBtn from '../dishes/createDishBtn/CreateDishBtn';
import AuthContext from '../../contexts/authContext';

function Hero() {
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <div className={styles.hero}>
      <img src={heroImage} alt="Hero" className={styles.heroImage} />
      <div className={styles.slogan}>
        Discover the Unexplored Flavors of Nature
      </div>

      {isAuthenticated && (
        <div className={styles.createDishBtnContainer}>
          <CreateDishBtn />
        </div>
      )}
    </div>
  );
}

export default Hero;

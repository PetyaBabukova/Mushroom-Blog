import styles from './Header.module.css';
import Search from '../Search/Search';
import logo from '../../assets/wild-mushrooms-logo.png';

import { Link } from 'react-router-dom';

import Path from '../../paths'


function Header() {
 
  const navItems = ['Dishes', 'Salads', 'Appetizers', 'Soups', 'Main Dishes', 'Desserts', 'Our Team'];


  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.searchArea}>
          <Search />
        </div>
        <div className={styles.authLinks}>
          <Link to={Path.REGISTER}>Register</Link> / <Link to={Path.LOGIN}>Login</Link>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Wild Mushrooms Gourmet Recipes" className={styles.logo} />
      </div>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <Link to='/' className={styles.navItem}>Dishes</Link>
          <Link to='/salads' className={styles.navItem}>Salads</Link>
          <Link to='/appetizers' className={styles.navItem}>Appetizers</Link>
          <Link to='/soups' className={styles.navItem}>Soups</Link>
          <Link to='/main-dishes' className={styles.navItem}>Main Dishes</Link>
          <Link to='/desserts' className={styles.navItem}>Desserts</Link>
          <Link to='/our-team' className={styles.navItem}>Our Team</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

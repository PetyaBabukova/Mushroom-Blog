import styles from './Header.module.css';
import Search from '../Search/Search';
import logo from '../../assets/wild-mushrooms-logo.png';

function Header() {
 

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.searchArea}>
          <Search />
        </div>
        <div className={styles.authLinks}>
          <a href="/register">Register</a> / <a href="/login">Login</a>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Wild Mushrooms Gourmet Recipes" className={styles.logo} />
      </div>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>HOME</li>
          <li className={styles.navItem}>SALADS</li>
          <li className={styles.navItem}>APPETIZER</li>
          <li className={styles.navItem}>SOUPS</li>
          <li className={styles.navItem}>MAIN DISHES</li>
          <li className={styles.navItem}>DESSERTS</li>
          <li className={styles.navItem}>OUR TEAM</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

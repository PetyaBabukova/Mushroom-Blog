import styles from './Header.module.css';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
// import Search from '../Search/Search';

import AuthContext from '../../contexts/authContext';
import logo from '../../assets/wild-mushrooms-logo.png';
import Path from '../../paths'


function Header() {
	const { isAuthenticated, username, userId, hasProfile } = useContext(AuthContext)

	// console.log(hasProfile);
	return (
		<header className={styles.header}>
			<div className={styles.topBar}>
				<div className={styles.searchArea}>
					{/* <Search /> */}
				</div>
				<div className={styles.authLinks}>
					{!isAuthenticated && (
						<>
							<Link to={Path.REGISTER} className={styles.headerLinks}>Register </Link>
							|
							<Link to={Path.LOGIN} className={styles.headerLinks}> Login</Link>
						</>
					)}
					{isAuthenticated && !hasProfile && (
						<Link to={`/${userId}/set-profile`} className={styles.setProfileLink}>Set Profile</Link>
					)}

					{isAuthenticated && hasProfile && (
						<Link to={`/${userId}/view-profile`} className={styles.setProfileLink}>View Profile</Link>
					)}

					{isAuthenticated && (
						<Link to={Path.LOGOUT} className={styles.headerLinks}>{username} | Logout</Link>
					)}

				</div>
			</div>
			<div className={styles.logoContainer}>
				<Link to='/'><img src={logo} alt="Wild Mushrooms Gourmet Recipes" className={styles.logo} /></Link>
			</div>
			<nav className={styles.navBar}>
				<ul className={styles.navList}>
					<Link to='/' className={styles.navItem}>All Dishes</Link>
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

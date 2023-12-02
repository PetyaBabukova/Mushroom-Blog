import { useState, useEffect, useContext } from 'react';
import styles from './Profile.module.css';
import * as chefService from '../../../services/chefServise';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext';
import ProfileContext from '../../../contexts/profileContext';

function Profile() {
    const { userId, isAuthenticated, username } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        if (userId) {
            chefService.getOne(userId)
                .then(result => {
                    if (result) {
                        setCurrentUser(result);
                    }
                });
        }
    }, [userId]);

    if (!isAuthenticated) {
        // User is not authenticated, render a message or redirect to login
        return (
            <div className={styles.profile}>
                <p>Please log in to view your profile.</p>
            </div>
        );
    }

    if (!currentUser) {
        return (
            <div className={styles.profile}>
                <div className={styles.chefProfileLinkContainer}>
                    <Link to={`/${userId}/set-profile`} className={styles.chefProfileLink}> Set Profile </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.profile}>
            <div className={styles.banner}>
                <p>Chef {username}</p>
            </div>
            <img src={currentUser.imageUrl} alt="Chef image" className={styles.photo} />
            <div className={styles.description}>
                <p><span className={styles.boldedPiece}>Motto: </span>{currentUser.motto}</p>
            </div>

            <div className={styles.chefProfileLinkContainer}>
                <Link to={`/${userId}/dishes`} className={styles.chefProfileLink}> View Chef {username} recipes</Link>
            </div>

            <div className={styles.chefProfileLinkContainer}>
                <Link to={`/${userId}/profile`} className={styles.chefProfileLink}> View Chef {username} profile</Link>
            </div>
        </div>
    );
}

export default Profile;

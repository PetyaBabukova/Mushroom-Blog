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
    }, []);

    if (!isAuthenticated  ) {
        return null
    }

    if (!currentUser ) {
        return (
            <div className={styles.profile}>
                 <div className={styles.chefProfileLinkContainer}>
                <Link to={`/${userId}/set-profile`} className={styles.chefProfileLink}> Set Profile </Link>
            </div>
            </div>
        )
    }

    return (

       ( isAuthenticated || currentUser) && (

        
        <div className={styles.profile}>
            <div className={styles.banner}>
                <p>Chef {username}</p>
            </div>
            <img src={currentUser.imageUrl} alt="Chef image" className={styles.photo} />
            <div className={styles.description}>
                <p><span className={styles.boldedPiece}>Motto: </span>{currentUser.motto}</p>
            </div>

            <div className={styles.chefProfileLinkContainer}>
                <Link to={`/${userId}/dishes`} className={styles.chefProfileLink}> View Chef {currentUser.username} recipies</Link>
            </div>

            <div className={styles.chefProfileLinkContainer}>
                <Link to={`/${userId}/profile`} className={styles.chefProfileLink}> View Chef {currentUser.firstName} profile</Link>
            </div>
        </div>
        )





    );
}

export default Profile;

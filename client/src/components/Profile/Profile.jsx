import { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import * as chefService from '../../services/chefServise';
import { Link } from 'react-router-dom';

function Profile() {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        chefService.getOne(2)
            .then((result) => {
                setCurrentUser(result[0])
            })

    }, [])

    return (
        <div className={styles.profile}>
            {/* <CreateDishBtn /> */}
            <div className={styles.banner}>
                <p>Chef {currentUser.firstName} {currentUser.lastName}</p>
            </div>
            <img src={currentUser.image} alt="Profile" className={styles.photo} />
            <div className={styles.description}>
                <p><span className={styles.boldedPiece}>Motto: </span>{currentUser.motto}</p>
            </div>

            <div className={styles.chefProfileLinkContainer}>
                <Link to={`/${currentUser.firstName}/dishes`} className={styles.chefProfileLink}> View Chef {currentUser.firstName} recipies</Link>
            </div>

            <div className={styles.chefProfileLinkContainer}>
                <Link to={`/${currentUser._id}/profile`} className={styles.chefProfileLink}> View Chef {currentUser.firstName} profile</Link>
            </div>

            <div className={styles.chefProfileLinkContainer}>
                <Link to={`/${currentUser._id}/edit-profile`} className={styles.chefProfileLink}> Edit Profile </Link>
            </div>
        </div>
    );
}

export default Profile;

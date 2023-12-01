import { useState, useEffect, useContext } from 'react';
import styles from './Profile.module.css';
import * as chefService from '../../../services/chefServise';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext';

function Profile() {

    const [profile, setProfile] = useState({})
    const {username, userId} = useContext(AuthContext)
    const token = localStorage.getItem('accessToken');

    const currentUserId = userId;
    // console.log(userId);

    // useEffect(() => {
    //     chefService.getOne(currentUserId)
    //         .then((result) => {
    //             setCurrentUser(result[0])
    //             console.log(result);
    //         })

    // }, [])

//     useEffect(() => {
//         if (userId) {
//             fetch(`http://localhost:3030/users/${userId}`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'Application/json',
//                     'X-Authorization': token
//                 }
//             })
//             .then(response => {
//                 if(response.ok) {
//                     if (response.status === 204) {
//                         console.log("No content returned from the server");
//                         return null; // or return an empty object, depending on your logic
//                     }
//                     return response.json();
//                 }
//                 throw new Error('Failed to fetch');
//             })
//             .then(profileData => {
//                 if (profileData) {
//                     console.log("profile: ", profileData);
//                     setProfile(profileData);
//                 }
//             })
//             .catch(error => console.error("Error fetching profile:", error));
//         }
//     }, [userId]);

// console.log(profile);

    return (
        <div className={styles.profile}>
            {/* <CreateDishBtn /> */}
            <div className={styles.banner}>
                <p>Chef {username}</p>
            </div>
            <img src={profile.image} alt="Chef image" className={styles.photo} />
            <div className={styles.description}>
                <p><span className={styles.boldedPiece}>Motto: </span>{profile.motto}</p>
            </div>

            <div className={styles.chefProfileLinkContainer}>
                <Link to={`/${userId}/dishes`} className={styles.chefProfileLink}> View Chef {profile.firstName} recipies</Link>
            </div>

            <div className={styles.chefProfileLinkContainer}>
                <Link to={`/${userId}/profile`} className={styles.chefProfileLink}> View Chef {profile.firstName} profile</Link>
            </div>

            <div className={styles.chefProfileLinkContainer}>
                <Link to={`/${userId}/edit-profile`} className={styles.chefProfileLink}> Edit Profile </Link>
            </div>
        </div>
    );
}

export default Profile;

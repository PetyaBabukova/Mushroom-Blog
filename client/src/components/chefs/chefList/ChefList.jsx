import { useState, useEffect, useContext } from 'react';
import styles from './ChefList.module.css'
import * as chefService from '../../../services/chefServise';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext';

function ChefList() {
    const [chefs, setChefs] = useState([]);
    const {userId, hasProfile} = useContext(AuthContext)

    useEffect(() => {
        chefService.getAll()
            .then(chefs => {
                // console.log(Object.values(chefs))
                setChefs(Object.values(chefs))
            })
    }, [hasProfile]);

    return (
        <>
            <div className={styles.list}>
            <h4 className={styles.ChefsListHeading}>Our Chefs</h4>
                <div className={styles.chefProfileLinkContainer}>
                    {chefs.map(chef => (
                        <Link to={`/${chef._ownerId}/dishes`} className={styles.chefProfileLink} key={chef._id}> Chef {chef.name} recipes</Link>
                    ))}
                </div>
            </div>
        </>

    );
}

export default ChefList;
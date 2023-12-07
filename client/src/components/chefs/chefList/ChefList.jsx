import { useContext } from 'react';
import styles from './ChefList.module.css'
import { Link } from 'react-router-dom';
import ProfileContext from '../../../contexts/profileContext';

function ChefList() {
    const {chefs} = useContext(ProfileContext)

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
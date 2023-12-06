import styles from './OurTeam.module.css';
import { useState, useEffect } from 'react';
import * as chefService from '../../../services/chefServise'
import OurTeamCard from '../ourTeamCard/OurTeamCard';



function OurTeam() {
    const [chefs, setChefs] = useState([]);
    
    useEffect(() => {
        chefService.getAll()
        .then(chefs => {
            setChefs(Object.values(chefs))
        })
    }, []);

    
    return ( 
    <>
    
    <div className={styles.ourTeamContainer}>

        {chefs.map(chef => (
            <OurTeamCard
            key={chef._id}
            name={chef.name}
            email={chef.email}
            phoneNumber={chef.phoneNumber}
            imageUrl={chef.imageUrl}
            bio={chef.bio}
            motto={chef.motto}
            spec={chef.spec}
            _ownerId={chef._ownerId}
            />
            ))}
                </div>
            </>
        );
};





export default OurTeam; 
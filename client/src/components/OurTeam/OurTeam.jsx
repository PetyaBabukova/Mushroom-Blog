import styles from './OurTeam.module.css';
import { useState, useEffect } from 'react';
import * as chefService from '../../services/chefServise'
import OurTeamCard from '../OurTeamCard/OurTeamCard'



function OurTeam() {


    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        chefService.getAll()
            .then(chefs => {
                console.log(Object.values(chefs))
                setChefs(Object.values(chefs))
            })
    }, []);

    return ( 
    <>
    
    
    <div className={styles.ourTeamContainer}>

        {chefs.map(chef => (
            <OurTeamCard
            key={chef._id}
            firstName={chef.firstName}
            lastName={chef.lastName}
            email={chef.email}
            phoneNumber={chef.phoneNumber}
            image={chef.image}
            bio={chef.bio}
            motto={chef.motto}
            spec={chef.specializing}
            />
            ))}
                </div>
            </>
        );
};





export default OurTeam; 
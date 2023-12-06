import styles from './OurTeam.module.css';
import { useState, useEffect, useContext } from 'react';
import * as chefService from '../../../services/chefServise'
import OurTeamCard from '../ourTeamCard/OurTeamCard';
import ProfileContext from '../../../contexts/profileContext';



function OurTeam() {
    const { chefs, isLoading } = useContext(ProfileContext)
    
    return (
        <>
            <div className={styles.ourTeamContainer}>

                {chefs.map(chef => (
                    <OurTeamCard
                        key={chef._id}
                        name={chef.name}
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
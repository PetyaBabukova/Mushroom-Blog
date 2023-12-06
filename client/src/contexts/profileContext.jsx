import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as chefService from '../services/chefServise';
import AuthContext from "./authContext";
import usePersistedState from "../hooks/usePersistedState";
import * as validations from '../lib/validations';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const navigate = useNavigate();
    const { userId, checkUserProfile } = useContext(AuthContext);
    const [profile, setProfile] = usePersistedState('profile', {});

    const [chefs, setChefs] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        chefService.getAll()
            .then(chefs => {
                setChefs(Object.values(chefs));
                setIsLoading(false);  
            });
    }, []);
    
    const onSetProfileSubmit = async (values) => {

        const validationErrors = {};
        Object.keys(values).forEach(key => {
            const isImageUrl = key === 'imageUrl';
            const error = validations.validateProfileField(values[key], isImageUrl);
            if (error) {
                validationErrors[key] = error;
            }
        });

        if (Object.keys(validationErrors).length > 0) {
            return { isValid: false, errors: validationErrors };
        }

        try {
            const setedProfile = await chefService.setProfile({
                ...values,
                _ownerId: userId
            });
            setProfile(state => ({ ...state, setedProfile }));
            await checkUserProfile(); // Update the profile check
            navigate(`/${setedProfile._ownerId}/view-profile`);
            return { isValid: true };
        } catch (error) {
            console.error('Error updating profile:', error);
            return { isValid: false, errors: { server: 'Error updating profile' }};
        }
    };
    console.log(chefs);
    
    const values = {
        onSetProfileSubmit,
        chefs,
        isLoading 
    };

    return (
        <ProfileContext.Provider value={values}>
            {children}
        </ProfileContext.Provider>
    );
};

ProfileContext.displayName = 'ProfileContext';

export default ProfileContext;

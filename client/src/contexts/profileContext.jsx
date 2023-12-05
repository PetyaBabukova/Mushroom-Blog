import { createContext, useContext } from "react";
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
    
    const values = {
        onSetProfileSubmit,
        name: profile.name,
        bio: profile.bio,
        spec: profile.spec,
        imageUrl: profile.imageUrl,
        motto:profile.motto,
        _ownerId: profile._ownerId,
        profile,
    };

    return (
        <ProfileContext.Provider value={values}>
            {children}
        </ProfileContext.Provider>
    );
};

ProfileContext.displayName = 'ProfileContext';

export default ProfileContext;

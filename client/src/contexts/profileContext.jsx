import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as chefService from '../services/chefServise';
import AuthContext from "./authContext";
import usePersistedState from "../hooks/usePersistedState";
import * as validations from '../lib/validations';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const [profile, setProfile] = usePersistedState('profile', {});
    
    const onSetProfileSubmit = async (values) => {
        try {
            const setedProfile = await chefService.setProfile({
                ...values,
            });
            setedProfile._ownerId = userId
            setProfile(state => ({ ...state, setedProfile }));
            navigate(`/${setedProfile._ownerId}/view-profile`);
           
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };
    
    const values = {
        onSetProfileSubmit,
        // onEditProfileSubmit,
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

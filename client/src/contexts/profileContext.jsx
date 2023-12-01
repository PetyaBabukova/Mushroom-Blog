import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as chefService from '../services/chefServise';
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";
import AuthContext from "./authContext";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const [profile, setProfile] = usePersistedState('profile', {});

    const _ownerId = userId;
    
    const onEditProfileSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData);

       
            const result = await chefService.edit({
                name: values.name, 
                imageUrl: values.imageUrl,
                spec: values.spec,
                bio: values.bio,
                motto: values.motto,
            }, _ownerId)
            .then(result => {
                console.log(result);
                setProfile(result)
            })

            navigate(`${userId}/view-profile`);
       
    };

   

    const values = {
        onEditProfileSubmit,
        profile,
        setProfile
    };

    return (
        <ProfileContext.Provider value={values}>
            {children}
        </ProfileContext.Provider>
    );
};

ProfileContext.displayName = 'ProfileContext';

export default ProfileContext;

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as chefService from '../services/chefServise';
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children
})=>{
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
	const [hasProfile, setHasProfile] = useState();
	const [profileStatusUpdated, setProfileStatusUpdated] = useState(false);


	const checkUserProfile = async () => {
        if (auth._id) {
            const chef = await chefService.getOne(auth._id);
            setHasProfile(!!chef);
        } else {
            setHasProfile(false);
        }
    };

	useEffect(() => {
        if (auth._id) {
            chefService.getOne(auth._id)
                .then(chef => {
                    setHasProfile(!!chef);
                });
        } else {
            setHasProfile(false);
        }
    }, [auth._id, profileStatusUpdated]);

    const onRegisterSubmit = async (values) => {
		try {
			const result = await chefService.register(
				values.username, 
				values.email, 
				values.password, 
				);
			console.log(result);
			setAuth(result);
			localStorage.setItem('accessToken', result.accessToken);
			navigate(Path.HOME);

		} catch (error) {
			if (error.response && error.response.status === 409) {
				throw new Error(error.response.data.message);
			} else {
				throw new Error("You can not register this email");
			}
		}

	};

	const onLoginSubmit = async (values) => {
		try {
			const result = await chefService.login(values.email, values.password);
			setAuth(result);
			localStorage.setItem('accessToken', result.accessToken);
			navigate(Path.HOME);

		} catch (error) {
			if (error.response && error.response.status === 403) {
				throw new Error(error.response.data.message);
			} else {
				throw new Error("Email or Password do not match!");
			}
		}
	};

	const logoutHandler = () => {
		localStorage.removeItem('accessToken');
		setAuth({});
		setHasProfile(false);
	}

	const values = {
		logoutHandler,
		onRegisterSubmit,
		onLoginSubmit,
		hasProfile,
		setHasProfile,
		checkUserProfile,
		username: auth.username || auth.email,
		email: auth.email,
		isAuthenticated: !!auth.accessToken,
		userId: auth._id
	}

    return (
        <AuthContext.Provider value = {values}>
            {children}
        </AuthContext.Provider>
    )
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
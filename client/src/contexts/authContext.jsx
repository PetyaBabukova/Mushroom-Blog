import { createContext, useState } from "react";
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

    const onRegisterSubmit = async (values) => {
		try {
			const result = await chefService.register(values.username, values.email, values.password);
			// console.log(result);
			setAuth(result);
			// console.log(auth);
			// console.log(result.accessToken);
			localStorage.setItem('accessToken', result.accessToken);
			navigate(Path.HOME);

		} catch (error) {
			console.log('Unsuccessful register', error);
		}

	};

	const onLoginSubmit = async (values) => {
		try {
			const result = await chefService.login(values.email, values.password);
			setAuth(result);
			localStorage.setItem('accessToken', result.accessToken);
			navigate(Path.HOME);

		} catch (error) {
			console.log("Unsuccessful login!", error);
		}
	};

	const logoutHandler = () => {
		localStorage.removeItem('accessToken');
		setAuth({});
	}


	const values = {
		logoutHandler,
		onRegisterSubmit,
		onLoginSubmit,
		username: auth.username || auth.email,
		email: auth.email,
		isAuthenticated: !!auth.email,
		_id: auth._id
	}

	console.log("auth: ", auth);
	console.log("email: ", auth.email);
	console.log("username: ", auth.username);
	console.log("email: ", auth.email);

    return (
        <AuthContext.Provider value = {values}>
            {children}
        </AuthContext.Provider>
    )
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
const authUrl = "http://localhost:3030/users";
const profileUrl = "http://localhost:3030/data/teams";
const dishesUrl = "http://localhost:3030/data/recipes";

import * as dishService from './dishService';
import * as request from '../lib/requests';


export const getAll = async () => {
    const result = await request.get(profileUrl, "");
    // const result = await response.json();
    // console.log(result);
    return result;
};

export const getOne = async (userId) => {
    const profileUrl = `http://localhost:3030/data/teams?where=_ownerId%3D"${userId}"`; 
    const response = await fetch(profileUrl);

    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }

    const chefsArray = await response.json(); 
    return chefsArray.length > 0 ? chefsArray[0] : null; 
};

export const getChefRecipies = async (userId) => {

    const allDishes = await dishService.getAll();
    // console.log(allDishes);

    if (userId) {
        return allDishes.filter(dish => dish._ownerId === userId)
    }
    return allDishes;

};

export const register = (username, email, password, repeatPassword,) => request.post(`${authUrl}/register`, {username, email, password });

export const login = async (email, password) => {
    const result = await request.post(`${authUrl}/login`,{
        email,
        password
    });

    return result;
};

export const logout = () => request.get(`${authUrl}/logout`, null, false);


export const setProfile = async (data) => {
    // console.log(data);
    let result;
    try {
        result = await request.post(`${profileUrl}`, data);
        // console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const editProfile = async (profileId, data ) => {
    const result = await request.put(`${profileUrl}/${profileId}`, data);
    return result;
};

export const deleteProfile = async(profileId) => await request.del(`${profileUrl}/${profileId}`);
const authUrl = "http://localhost:3030/users";
const profileUrl = "http://localhost:3030/data/teams";
const dishesUrl = "http://localhost:3030/data/recipes";

import * as dishService from './dishService';
import * as request from '../lib/requests';


export const getAll = async () => {
    const result = await request.get(profileUrl, "");
    // const result = await response.json();

    console.log(result);
    return result;
};

export const getOne = async (userId) => {
    const profileUrl = `http://localhost:3030/data/teams?where=_ownerId%3D"${userId}"`; // URL with the query parameter
    const response = await fetch(profileUrl);

    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }

    const chefsArray = await response.json(); // Correctly wait for the JSON conversion
    return chefsArray.length > 0 ? chefsArray[0] : null; // Return the first chef or null if not found
};

export const getChefRecipies = async (currentAuthor) => {

    const allDishes = await dishService.getAll();

    if (currentAuthor) {
        return allDishes.filter(dish => dish.author === currentAuthor)
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
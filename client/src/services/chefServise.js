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

export const getOne = async (chefId) => {
    const response = await request.get(`${profileUrl}/${_ownerId}`, "");
    // const result = await response.json();
    console.log(response);
    // const chefsArray = Object.values(result)
    // const searchedChef = chefsArray.filter(c => c._id == chefId)
    // console.log(chefsArray);
    // console.log(searchedChef);
    // return searchedChef;
    // return result
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

export const edit = async(data, userId)=> {
    const result = await request.put(`${profileUrl}/${userId}`, data);
console.log(result);
    return result
}






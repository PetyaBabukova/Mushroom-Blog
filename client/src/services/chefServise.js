const authUrl = "http://localhost:3030/users";
const dishesUrl = "http://localhost:3030/data/recipes";

import * as dishService from './dishService';
import * as request from '../lib/requests';


export const getAll = async () => {
    const response = await fetch(chefsUrl);
    const result = await response.json();

    // console.log(result);
    return result;
};

export const getOne = async (chefId) => {
    const response = await fetch(`${authUrl}/${chefId}`);
    const result = await response.json();
    console.log(chefId);
    // const chefsArray = Object.values(result)
    // const searchedChef = chefsArray.filter(c => c._id == chefId)
    // console.log(chefsArray);
    // console.log(searchedChef);
    // return searchedChef;
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






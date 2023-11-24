const chefsUrl = "http://localhost:3030/users";
const dishesUrl = "http://localhost:3030/jsonstore/dishes";

import * as dishService from './dishService';
import * as request from '../lib/requests';


export const getAll = async () => {
    const response = await fetch(chefsUrl);
    const result = await response.json();

    // console.log(result);
    return result;
};

export const getOne = async (chefId) => {
    const response = await fetch(chefsUrl);
    const result = await response.json();
    const chefsArray = Object.values(result)
    const searchedChef = chefsArray.filter(c => c._id == chefId)
    // console.log(chefsArray);
    // console.log(searchedChef);
    return searchedChef;
};

export const getChefRecipies = async (currentAuthor) => {

    const allDishes = await dishService.getAll();

    if (currentAuthor) {
        return allDishes.filter(dish => dish.author === currentAuthor)
    }
    return allDishes;

};

export const register = (email,
    password,
    repeatPassword,
    name,
    imageUrl,
    spec,
    bio,
    motto
) => request.post(`${chefsUrl}/register`, {
    email,
    password,
    repeatPassword,
    name,
    imageUrl,
    spec,
    bio,
    motto
});
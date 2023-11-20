const chefsUrl = "http://localhost:3030/jsonstore/chefs";
const dishesUrl = "http://localhost:3030/jsonstore/dishes";

import * as dishService from './dishService';


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

export const register = async ({email, password, repeatPassword})=>{
    if (data.password !== data.repeatPassword) {
        throw new Error ({message: 'Password missmatch'});
    }

    try {
        const newChef = await request.post(chefsUrl, {email, password});
        console.log(newChef);
        if (!newChef) {
            throw new Error ({message: 'Creating new Chef faled'});
        }
    } catch (err) {
        if (err) {
            console.log(err);
        }
    }
}
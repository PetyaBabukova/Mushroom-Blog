const baseUrl = "http://localhost:3030/data/recipes";

import * as request from '../lib/requests'



export const getAll = async (searchedCategory) => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const dishesArray = Object.values(result);
    // console.log("dishesArray: ", dishesArray);

    if (searchedCategory) {
        return dishesArray.filter((d) => d.category == searchedCategory);
    }
    return dishesArray;
}

export const getOne = async (dishId) => {
    const response = await fetch(`${baseUrl}/${dishId}`);
    const result = await response.json();
    // console.log(result);
     return result;
}

export const create = async (data) => {
    console.log(data);
    let response;
    try {
        response = await request.post(baseUrl, data);
        // const result = await response.json();
        return response;
    } catch (error) {
        console.log( error);
        console.log( response);
    }
};


export const update = async (dishId, data) => {
    const result = await request.put(`${baseUrl}/${dishId}`, data);

    return result;
}; 

export const deleteDish = async (dishId) => await request.del(`${baseUrl}/${dishId}`);
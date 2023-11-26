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
     return result;
}

export const create = async (data) => {
    let response;
    try {
        response = await request.post(baseUrl, data);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating:', error);
        console.error('Response:', response);
        throw error; 
    }
};


export const deleteDish = async (dishId) => await request.del(`${baseUrl}/${dishId}`);
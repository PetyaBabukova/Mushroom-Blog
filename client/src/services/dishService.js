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
    // const dishesArray = Object.values(result)
    // const searchedDish = dishesArray.filter(d => d._id == dishId)
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
        throw error; // Re-throw to handle it in the calling function
    }
};


export const deleteDish = async (dishId) => {
    console.log(dishId);
    try {
        const response = await fetch(`${baseUrl}/${dishId}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

    } catch (error) {
        console.error('Error deleting the dish:', error);
    }
}
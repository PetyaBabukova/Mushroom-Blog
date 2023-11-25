import { useContext } from "react";
const baseUrl = "http://localhost:3030/data/recipes";

import AuthContext from "../contexts/authContext";


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
    const response = await fetch(baseUrl);
    const result = await response.json();
    // console.log(result);
    const dishesArray = Object.values(result)
    const searchedDish = dishesArray.filter(d => d._id == dishId)
    return searchedDish;
}

export const create = async (data, id) => {

    const {_id} = useContext(AuthContext)

    const body = {
        category: data.category,
        author: data.author,
        image: data.image,
        title: data.title,
        subtitle: data.subtitle,
        shortDescription: data.shortDescription,
        ingredients: data.ingredients,
        description: data.description,
        _ownerId: _id
    }

    console.log(body);

    try {

        const response = await fetch(baseUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        return result;

    } catch (error) {
        console.error('Error creating:', error);
    }
}

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
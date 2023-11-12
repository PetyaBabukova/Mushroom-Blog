
const baseUrl = "http://localhost:3030/jsonstore/dishes";

export const getAll = async (searchedCategory) => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const dishesArray = Object.values(result);
    // console.log("dishesArray: ", dishesArray);
    // console.log("searchedCategory: ", searchedCategory);

    
    // const filteredDishes = dishesArray.filter((d) => d.category == searchedCategory);

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
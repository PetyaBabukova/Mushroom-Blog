const baseUrl = "http://localhost:3030/jsonstore/dishes";

export const getAll = async ()=>{
    const response = await fetch(baseUrl);
    const result = await response.json();

    // console.log(result);
    return result;
}

export const getOne = async (dishId) =>{
    const response = await fetch(baseUrl);
    const result = await response.json(); 
    // console.log(result);
    const dishesArray = Object.values(result)
    const searchedDish = dishesArray.filter(d=>d._id==dishId)
    return searchedDish;
}
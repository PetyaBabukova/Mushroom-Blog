const baseUrl = "http://localhost:3030/jsonstore/chefs";

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    // console.log(result);
    return result;
};

export const getOne = async (chefId) =>{
    const response = await fetch(baseUrl);
    const result = await response.json(); 
    const chefsArray = Object.values(result)
    const searchedChef = chefsArray.filter(c=>c._id==chefId)
    // console.log(chefsArray);
    // console.log(searchedChef);
    return searchedChef;
}
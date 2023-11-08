const baseUrl = "http://localhost:3030/jsonstore/articles";

export const getAll = async ()=>{
    const response = await fetch(baseUrl);
    const result = await response.json();

    // console.log(result);
    return result;
}
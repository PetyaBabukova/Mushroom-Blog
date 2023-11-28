import * as request from '../lib/requests';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (dishId)=>{
   
    const result = await request.get(baseUrl); //over fatching!
    // console.log(result);
    return Object.values(result).filter(comment => comment.dishId===dishId) //over fatching!
}

export const create = async (dishId, chef, comment) => {
    const newComment = await request.post(baseUrl, {
        dishId,
        chef,
        comment
    });
    return newComment;
}
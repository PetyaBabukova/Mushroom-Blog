import * as request from '../lib/requests';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (dishId)=>{
    const result = await request.get(baseUrl); //over fatching!
    return Object.values(result).filter(comment => comment.dishId===dishId) //over fatching!
}

export const create = async (dishId, username, comment) => {
    const newComment = await request.post(baseUrl, {
        dishId,
        username,
        comment
    });
    return newComment;
}
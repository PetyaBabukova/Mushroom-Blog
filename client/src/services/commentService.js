import * as request from '../lib/requests';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (dishId)=>{
   
    const result = await request.get(baseUrl); //over fatching!
    return Object.values(result).filter(comment => comment.dishId===dishId) //over fatching!
}

export const getOne = async(commentId) =>{
    request.get(`${baseUrl}/${commentId}`)
}

export const create = async (dishId, chef, comment) => {
    const newComment = await request.post(baseUrl, {
        dishId,
        chef,
        comment
    });
    return newComment;
};

export const del = async (commentId) =>  await request.del(`${baseUrl}/${commentId}`);

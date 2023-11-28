

const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json'
        };
    }

    const token = localStorage.getItem('accessToken');
    // console.log(token);
    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        };
    }
    // console.log(options);
    return options;
};

const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (response.status === 204) { //This is because the logout. Look in the server specification 
        return {};
    }
    const result = (await response).json();

    if (!response.ok) { //This is sugestion from Ivo, it is usfull for error handling
        throw result
    }

    return result;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, "DELETE");
export const patch = request.bind(null, "PATCH");
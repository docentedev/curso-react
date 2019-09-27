import axios from 'axios';
import { apiHost } from '../configure';

class ApiError extends Error { }
const prevJwt = () => JSON.parse(localStorage.getItem('jwt')) || '';

export const usersGetAll = async (data) => {
    try {
        return await axios.get(`${apiHost}/api/user`, {
            headers: {
                authorization: `bearer ${prevJwt().token}`,
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};

export const usersUpdate = async (data) => {
    try {
        return await axios.path(`${apiHost}/api/user/${data.id}`, {
            headers: {
                authorization: `bearer ${prevJwt().token}`,
                data: data,
            },
        });
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};
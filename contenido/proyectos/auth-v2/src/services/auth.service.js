import axios from 'axios';
import { apiHost } from '../configure';

class ApiError extends Error {}

export const login = async (data) => {
    try {
        return await axios.post(`${apiHost}/login`, data);
    } catch (error) {
        const status = error.response.status;
        if (status === 404) throw new ApiError('404');
        throw new ApiError(error.message);
    }
};
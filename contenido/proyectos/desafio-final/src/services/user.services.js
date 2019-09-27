import axios from 'axios';
import { API_HOST } from './config';

const MODULE = 'user';

export const getAllService = (jwt = '') => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_HOST}/${MODULE}`, {
            headers: {
                authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}

export const saveService = (jwt = '', data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${API_HOST}/${MODULE}`, data, {
            headers: {
                authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}
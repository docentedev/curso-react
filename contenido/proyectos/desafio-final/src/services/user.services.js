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

export const getService = (jwt = '', id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${API_HOST}/${MODULE}/${id}`, {
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

export const updateService = (jwt = '', data, id) => {
    return new Promise((resolve, reject) => {
        axios.patch(`${API_HOST}/${MODULE}/${id}`, data, {
            headers: {
                authorization: `bearer ${jwt}`,
            }
        }).then(data => {
            resolve(data.data);
        }).catch(err => reject(err.message));
    })
}

export const deleteService = (jwt = '', id) => {
    return new Promise((resolve, reject) => {
        const url = `${API_HOST}/${MODULE}/${id}`;
        axios.delete(url, { headers: { authorization: `bearer ${jwt}` } })
            .then(data => {
                resolve(data.data);
            }).catch(err => reject(err.message));
    })
}
import axios from 'axios';
import { HOST } from './config';

const MODULE = 'login';

export const loginService = (data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${HOST}/${MODULE}`, data).then(data => {
            resolve(data.data);
        }).catch(err => reject(err));
    })
}
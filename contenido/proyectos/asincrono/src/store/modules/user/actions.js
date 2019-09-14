import * as constants from './const';
import axios from 'axios';

const userGetAllStartActionCreator = () => {
    return {
        type: constants.USER_GET_ALL_START,
        payload: null,
    };
}

const userGetAllSuccessActionCreator = (data) => {
    return {
        type: constants.USER_GET_ALL_SUCCESS,
        payload: data,
    };
}

/**
 * 
 * @param {string} message 
 */
const userGetAllErrorActionCreator = (message) => {
    return {
        type: constants.USER_GET_ALL_ERROR,
        payload: message,
    };
}

export const userGellAllAsyncActionCreator = () => {
    return  (dispatch, getState) => {
        dispatch(userGetAllStartActionCreator());
        axios.get('http://localhost:3333/api/user').then((response) => {
            dispatch(userGetAllSuccessActionCreator(response.data.data));
        }).catch((err) => {
            debugger
            dispatch(userGetAllErrorActionCreator(''))
        })
    }
}
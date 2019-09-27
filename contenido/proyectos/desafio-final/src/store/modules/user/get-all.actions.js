import {
    USER_GET_ALL_START,
    USER_GET_ALL_SUCCESS,
    USER_GET_ALL_ERROR,
} from './const';

import { getAllService } from '../../../services/user.services';

const startActionCreator = () => ({
    type: USER_GET_ALL_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: USER_GET_ALL_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: USER_GET_ALL_ERROR,
    payload: errorMessage,
})

export const getAllActionsAsyncCreator = () => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        const jwt = getStore().auth.login.data;
        getAllService(jwt).then(data => {
            dispatch(successActionCreator(data.data));
        }).catch(err => {
            dispatch(errorActionCreator(err));
        }) 
    }
}
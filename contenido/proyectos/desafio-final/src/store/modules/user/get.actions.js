import {
    USER_GET_START,
    USER_GET_SUCCESS,
    USER_GET_ERROR,
} from './const';

import { getService } from '../../../services/user.services';

const startActionCreator = () => ({
    type: USER_GET_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: USER_GET_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: USER_GET_ERROR,
    payload: errorMessage,
})

export const getActionsAsyncCreator = (id) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        const jwt = getStore().auth.login.data;
        getService(jwt, id).then(data => {
            dispatch(successActionCreator(data.data));
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}
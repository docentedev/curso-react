import {
    USER_CREATE_START,
    USER_CREATE_SUCCESS,
    USER_CREATE_ERROR,
} from './const';

import { saveService } from '../../../services/user.services';

const startActionCreator = () => ({
    type: USER_CREATE_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: USER_CREATE_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: USER_CREATE_ERROR,
    payload: errorMessage,
})

export const saveActionsAsyncCreator = (data) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        const jwt = getStore().auth.login.data;
        saveService(jwt, data).then(data => {
            dispatch(successActionCreator(data.data));
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}
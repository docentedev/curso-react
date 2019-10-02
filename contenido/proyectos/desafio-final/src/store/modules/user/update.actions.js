import {
    USER_UPDATE_START,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_ERROR,
} from './const';

import { updateService } from '../../../services/user.services';

const startActionCreator = () => ({
    type: USER_UPDATE_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: USER_UPDATE_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: USER_UPDATE_ERROR,
    payload: errorMessage,
})

export const updateActionsAsyncCreator = (data, id) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        const jwt = getStore().auth.login.data;
        updateService(jwt, data, id).then(data => {
            dispatch(successActionCreator(data.data));
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}
import {
    USER_DELETE_START,
    USER_DELETE_SUCCESS,
    USER_DELETE_ERROR,
} from './const';

import { deleteService } from '../../../services/user.services';

import { getAllActionsAsyncCreator as getAll } from './get-all.actions';


const startActionCreator = () => ({
    type: USER_DELETE_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: USER_DELETE_SUCCESS,
    payload: data,
})

const errorActionCreator = (errorMessage) => ({
    type: USER_DELETE_ERROR,
    payload: errorMessage,
})

export const deleteActionsAsyncCreator = (id) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());
        const jwt = getStore().auth.login.data;
        deleteService(jwt, id).then(data => {
            dispatch(successActionCreator(data.data));
            dispatch(getAll());
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}
import {
    USER_FIND_ALL_START,
    USER_FIND_ALL_SUCCESS,
    USER_FIND_ALL_ERROR,
} from './const';

// Sync Action Creator
const findAllStartActionCreator = () => {
    return {
        type: USER_FIND_ALL_START,
        payload: null,
    };
};

const findAllSuccessActionCreator = (data) => {
    return {
        type: USER_FIND_ALL_SUCCESS,
        payload: data,
    };
};

const findAllErrorActionCreator = (errorMessage) => {
    return {
        type: USER_FIND_ALL_ERROR,
        payload: errorMessage,
    };
};

// Async Action Creator
export const findAllActionCreatorAsync = () => {
    return (dispath) => {
        dispath(findAllStartActionCreator());
        // Call Services

        // SUCCESS
        // dispath(findAllSuccessActionCreator([]));

        // ERROR
        // dispath(findAllErrorActionCreator('ERROR'));
    };
};
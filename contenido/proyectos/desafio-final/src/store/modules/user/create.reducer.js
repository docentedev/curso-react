import {
    USER_CREATE_START,
    USER_CREATE_SUCCESS,
    USER_CREATE_ERROR,
} from './const';

const initialState = {
    data: null,
    error: null,
    success: null,
    errorMessage: '',
    loading: false,
};

const createReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case USER_CREATE_START:
            return {
                ...prevState,
                loading: true,
            };

        case USER_CREATE_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                loading: false,
                error: false,
                success: true,
            };

        case USER_CREATE_ERROR:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
            };

        default:
            return prevState;
    }
}

export default createReducer;
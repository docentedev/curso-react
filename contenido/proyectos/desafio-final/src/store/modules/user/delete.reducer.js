import {
    USER_DELETE_START,
    USER_DELETE_SUCCESS,
    USER_DELETE_ERROR,
} from './const';

const initialState = {
    data: null,
    error: null,
    success: null,
    errorMessage: '',
    loading: false,
};

const deleteReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case USER_DELETE_START:
            return {
                ...prevState,
                loading: true,
            };

        case USER_DELETE_SUCCESS:
            return {
                ...prevState,
                data: action.payload,
                loading: false,
                error: false,
                success: true,
            };

        case USER_DELETE_ERROR:
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

export default deleteReducer;
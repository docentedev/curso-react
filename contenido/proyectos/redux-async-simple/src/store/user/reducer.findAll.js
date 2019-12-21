import {
    USER_FIND_ALL_START,
    USER_FIND_ALL_SUCCESS,
    USER_FIND_ALL_ERROR,
} from './const';

const initialState = {
    data: null, // or [] or {},
    loading: false,
    errorMessage: '',
    error: false,
    success: null,
};

const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case USER_FIND_ALL_START:
            return {
                ...prevState,
                loading: true,
            };
        case USER_FIND_ALL_SUCCESS:
            return {
                ...prevState,
                loading: false,
                data: action.payload,
                error: false,
                success: true,
            };
        case USER_FIND_ALL_ERROR:
            return {
                ...prevState,
                loading: false,
                errorMessage: action.payload,
                error: true,
                success: false,
            };

        default:
            return prevState;
    }
};

export default userReducer;
import { START, SUCCESS, ERROR } from './users.const';

const initialState = {
    loading: false,
    data: [],
    success: null,
    error: null,
    errorMessage: '',
};

const usersReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case START:
            return {
                ...prevState,
                loading: true,
            }
        case SUCCESS:
            return {
                ...prevState,
                error: false,
                loading: false,
                success: true,
                data: action.payload,
            }
        case ERROR:
            return {
                ...prevState,
                error: true,
                loading: false,
                success: false,
                errorMessage: action.payload,
            }
        default:
            return prevState;
    }
};

export default usersReducer;
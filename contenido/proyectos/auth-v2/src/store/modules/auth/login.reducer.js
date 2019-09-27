import { START, SUCCESS, ERROR, CLEAR } from './login.const';

const prevJwt = JSON.parse(localStorage.getItem('jwt'));
const initialState = {
    loading: false,
    data: prevJwt || null,
    success: null,
    error: null,
    errorMessage: '',
    existToken: !!prevJwt,
};

const loginReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case START:
            return {
                ...prevState,
                loading: true,
            }
        case SUCCESS:
            localStorage.setItem('jwt', JSON.stringify(action.payload))
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
        case CLEAR:
            localStorage.removeItem('jwt');
            return {
                data: null,
                error: false,
                loading: false,
                success: null,
                errorMessage: '',
                existToken: false,
            }
        default:
            return prevState;
    }
};

export default loginReducer;
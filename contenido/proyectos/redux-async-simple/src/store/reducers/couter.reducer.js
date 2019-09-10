import { COUNTER_ADD, COUNTER_OPERATION_START, COUNTER_SUBTRACT } from '../const';

const initialState = {
    number: 0,
    loading: false,
};
const counterReducer = (prevSate = initialState, action) => {
    switch (action.type) {
        case COUNTER_ADD:
            return {
                ...prevSate,
                number: action.payload,
                loading: false,
            };

        case COUNTER_OPERATION_START:
            return {
                ...prevSate,
                loading: true,
            };

        case COUNTER_SUBTRACT:
            return {
                ...prevSate,
                number: action.payload,
                loading: false,
            };

        default:
            return prevSate;
    }
}

export default counterReducer;
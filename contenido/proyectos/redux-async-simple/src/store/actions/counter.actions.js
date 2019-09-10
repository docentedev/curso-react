import { COUNTER_ADD, COUNTER_SUBTRACT, COUNTER_OPERATION_START } from "../const";

const operationStartAction = () => ({
    type: COUNTER_OPERATION_START,
    payload: null,
});

const addAction = (number) => ({
    type: COUNTER_ADD,
    payload: number,
});

const subtractAction = (number) => ({
    type: COUNTER_SUBTRACT,
    payload: number,
});

export const addActionAsync = (number) => {

    return (dispatch) => {
        dispatch(operationStartAction());
        setTimeout(() => {
            dispatch(addAction(number))
        }, 2000);
    }
}

export const subtractActionAsync = (number) => {

    return (dispatch) => {
        dispatch(operationStartAction());
        setTimeout(() => {
            dispatch(subtractAction(number))
        }, 2000);
    }
}
import {
    TODO_ADD,
    TODO_COMPLETED,
    TODO_REMOVE,
    TODO_UNCOMPLETED,
    TODO_COUNTER,
} from '../const';

export const addTodo = (todo) => {
    return {
        type: TODO_ADD,
        payload: todo,
    }
};

export const removeTodo = (todo) => {
    return {
        type: TODO_REMOVE,
        payload: todo,
    }
};

export const uncompletedTodo = (todo) => {
    return {
        type: TODO_UNCOMPLETED,
        payload: todo,
    }
};

export const completedTodo = (todo) => {
    return {
        type: TODO_COMPLETED,
        payload: todo,
    }
};

export const increaseCounter = () => {
    return {
        type: TODO_COUNTER,
        payload: null,
    }
};
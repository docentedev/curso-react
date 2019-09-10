import {
    TODO_ADD,
    TODO_COMPLETED,
    TODO_REMOVE,
    TODO_UNCOMPLETED,
    TODO_COUNTER,
} from '../const';

const initialState = {
    counter: 1,
    todos: [],
};

/**
 * 
 * @param {*} state 
 * @param {object} action 
 * @param {string} action.type
 * @param {object} action.payload
 * @param {Number} action.payload.id
 * @param {string} action.payload.name
 * @param {boolean} action.payload.completed
 */
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {
                ...state,
                // une a los todos actuales el nuevo todo y retorna la nueva lista
                todos: state.todos.concat([action.payload]),
            };
        case TODO_REMOVE:
            return {
                ...state,
                // solo retorna la lista donde el todo sea distinto a
                // lo pasado en la accion
                todos: state.todos.filter(todo => todo.id !== action.payload.id),
            };
        case TODO_COMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    const isCurrentTodo = todo.id === action.payload.id;
                    // si es el elemento que requerimos, cambiamos el estado
                    return isCurrentTodo ? ({...todo, status: true }) : todo;
                }),
            };
        case TODO_UNCOMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    const isCurrentTodo = todo.id === action.payload.id;
                    // si es el elemento que requerimos, cambiamos el estado
                    return isCurrentTodo ? ({...todo, status: false }) : todo;
                }),
            };
        case TODO_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            };
        default:
            return state;
    }
}

export default todosReducer;
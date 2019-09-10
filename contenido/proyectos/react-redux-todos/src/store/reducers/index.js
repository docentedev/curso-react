import { combineReducers } from 'redux';
import todosReducer from './todos.reducer';

const reducers = combineReducers({
    todos: todosReducer,
});

export default reducers;
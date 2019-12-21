import { combineReducer } from 'redux';
import findAllReducer from './reducer.findAll';


const reducer = combineReducer({
    findAll: findAllReducer,
});

export default reducer;
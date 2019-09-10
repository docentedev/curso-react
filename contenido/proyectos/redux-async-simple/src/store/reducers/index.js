import { combineReducers } from 'redux';
import counterReducer from './couter.reducer';

const reducer = combineReducers({
    counter: counterReducer,
});

export default reducer;
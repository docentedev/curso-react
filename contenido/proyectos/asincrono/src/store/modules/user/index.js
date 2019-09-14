import { combineReducers } from 'redux';
import userGetAll from './user-get-all.reducer';

const reducer = combineReducers({
    userGetAll,
});

export default reducer;
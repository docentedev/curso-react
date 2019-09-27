import { combineReducers } from 'redux';

import login from './login.reducer';


const rootReducer = combineReducers({
    login,
});

export default rootReducer;
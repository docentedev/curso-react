import { combineReducers } from 'redux';

import loginReducer from './login.reducer';

const authReducer = combineReducers({
    login: loginReducer,
});

export default authReducer;
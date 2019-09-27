import { combineReducers } from 'redux';

import usersGetAllReducer from './users.reducer';

const usersReducer = combineReducers({
    users: usersGetAllReducer,
});

export default usersReducer;
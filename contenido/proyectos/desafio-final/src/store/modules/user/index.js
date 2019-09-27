import { combineReducers } from 'redux';

import getAll from './get-all.reducer';
import get from './get.reducer';
import create from './create.reducer';


const rootReducer = combineReducers({
    getAll,
    get,
    create,
});

export default rootReducer;
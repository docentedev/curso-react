import { createStore } from 'redux';
import rootReducer from './modules/index.js';

const store = createStore(rootReducer);

export const store;
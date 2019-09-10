import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';

const store = createStore(
    reducers,
    applyMiddleware(logger)
);

export default store;
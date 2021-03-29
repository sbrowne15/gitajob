import { createStore, 
    combineReducers, 
    applyMiddleware, 
    compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import jobsReducer from '../reducers/jobs';
import errorsReducer from '../reducers/errors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        jobs: jobsReducer,
        errors: errorsReducer
    }),
    composeEnhancers(applyMiddleware(thunk, logger))
);

console.log(store.getState());

export default store;
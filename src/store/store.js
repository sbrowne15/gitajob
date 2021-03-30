import { createStore, 
    combineReducers, 
    applyMiddleware, 
    compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import jobsReducer from '../reducers/jobs';
import errorsReducer from '../reducers/errors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // configure redux devtools
const store = createStore(  //creating store by combining reducers
    combineReducers({
        jobs: jobsReducer,
        errors: errorsReducer
    }),
    composeEnhancers(applyMiddleware(thunk, logger))  //add middleware thunk for Async API actions logger for error logging
);

console.log(store.getState());

export default store;
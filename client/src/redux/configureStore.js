import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AuthReducer } from './auth/authReducer';

export const ConfigureStore = () => {
    
    const reducers = {
        auth : AuthReducer
    };

    const combinedReducers = combineReducers(reducers);
    const middleware = applyMiddleware(thunk, logger);
    
    return createStore(combinedReducers, middleware);
}
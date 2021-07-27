import * as ActionTypes from './ActionTypes';

const token = localStorage.getItem('token');
const creds = localStorage.getItem('creds');

export const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoading : true,
                isAuthenticated : false,
                user : action.creds
            };
        
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading : false,
                isAuthenticated : true,
                errMess : '',
                token : action.token
            };
        
        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoading : false,
                isAuthenticated : false,
                errMess : action.message
            };
        
        case ActionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                isLoading : true,
                isAuthenticated : true
            };
        
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading : false,
                isAuthenticated : false,
                token : '',
                user : null
            };
        
        default: 
            return state;
    }
}

const initialState = {
    isLoading : false,
    isAuthenticated : isAuthenticated(token),
    token : token,
    user : getUserFromCreds(creds),
    errMess : null
}

function isAuthenticated(token) {
    return token ? true : false;
}

function getUserFromCreds(creds){
    return creds ? JSON.parse(creds) : null;
}

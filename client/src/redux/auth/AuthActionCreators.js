import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const requestLogin = (creds) => {
    return {
        type : ActionTypes.LOGIN_REQUEST,
        creds
    };
}

export const receiveLogin = (response) => {
    return {
        type : ActionTypes.LOGIN_SUCCESS,
        token : response.token
    }
}

export const loginError = (message) => {
    return {
        type : ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    dispatch(requestLogin(creds));

    const url = baseUrl + 'users/login';

    const httpHeaders = {
        'Content-Type' : 'application/json'
    };

    const httpReq = {
        method : 'POST',
        headers : httpHeaders,
        body : JSON.stringify(creds)
    };

    return fetch(url, httpReq)
        .then((response) => {
            if(response.ok){
                return response;
            }
            else{
                let error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        }, (error) => { throw error })
        .then((response) => response.json())
        .then((response) => {
            if(response.success){
                localStorage.setItem('token', response.token);
                localStorage.setItem('creds', JSON.stringify(creds));

                dispatch(receiveLogin(response));
            }
            else{
                let error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(loginError(error.message)));
}

export const requestLogout = () => {
    return {
        type : ActionTypes.LOGOUT_REQUEST
    }
}

export const receiveLogout = () => {
    return {
        type : ActionTypes.LOGOUT_SUCCESS
    }
}

export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout);
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(receiveLogout());
}
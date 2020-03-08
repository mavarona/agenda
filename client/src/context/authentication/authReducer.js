import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case REGISTER_ERROR:
        case LOGIN_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                authenticated: null,
                user: null,
                message: action.payload
            }
        default:
            return state;
    }
}
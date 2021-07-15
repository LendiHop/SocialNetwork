import {ActionTypes, authType} from "./store";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state: authType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
export const setAuthUserData = (userId: number | null, email: string| null, login: string| null, isAuth: boolean) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} } as const);

export const getAuthUserData = () => {

    return (dispatch: (action: ActionTypes) => void) => {
        authAPI.me()
            .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    };
};

export const login = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: (action: (dispatch: (action: ActionTypes) => void) => void) => void) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        });
    };
};

export const logout = () => {

    return (dispatch: (action: ActionTypes) => void) => {
        authAPI.logout()
            .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    };
};

export default authReducer;
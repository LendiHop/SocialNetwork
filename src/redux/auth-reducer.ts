import {ActionTypes, authType, RootStateType} from "./store";
import {authAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
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
        return authAPI.me()
            .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    };
};

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, RootStateType, unknown, ActionTypes | FormAction> => {

    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = data.messages.length  > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
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
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
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}
export const setAuthUserData = (userId: number, email: string, login: string) => ({ type: SET_USER_DATA, data: {userId, email, login} } as const);

export const getAuthUserData = () => {

    return (dispatch: (action: ActionTypes) => void) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    };
};

export default authReducer;
import {ActionTypes, authType, dataType} from "./store";

const SET_USER_DATA = "SET_USER_DATA";
// const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    data: {
        id: -1,
        email: "",
        login: "",
    },
    isAuth: false
    // isFetching: false,
};

const authReducer = (state: authType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        // case TOGGLE_IS_FETCHING:
        //     return {
        //         ...state,
        //         isFetching: action.isFetching
        //     };
        default:
            return state;
    }
}
export const setAuthUserData = (data: dataType) => ({ type: SET_USER_DATA, data } as const);

// export const toggleIsFetching = (b: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching: b } as const);

export default authReducer;
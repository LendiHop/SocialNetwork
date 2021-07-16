import { getAuthUserData } from "./auth-reducer";
import {ActionTypes, appType, RootStateType} from "./store";
import {ThunkAction} from "redux-thunk";
import {FormAction} from "redux-form";

let initialState = {
    initialized: false
};

const appReducer = (state: appType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "INITIALIZE_SUCCESS":
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}
export const initializeSuccess = () => ({ type: "INITIALIZE_SUCCESS"} as const);

export const initializeApp = (): ThunkAction<void, RootStateType, unknown, ActionTypes | FormAction> => {

    return (dispatch) => {
            Promise.all([dispatch(getAuthUserData()),])
            .then(() => {
                dispatch(initializeSuccess());
            });
    };
};

export default appReducer;
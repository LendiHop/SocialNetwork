import {ActionTypes, UsersType, UserType} from "./store";

let initialState = {
    users: []
};

const usersReducer = (state: UsersType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                }),
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            };
        case "SET-USERS":
            return { ...state, users: [...state.users, ...action.users] };
        default:
            return state;
    }

    return state;
}

export const followAC = (userId: number) => ({ type: "FOLLOW", userId } as const);
export const unfollowAC = (userId: number) => ({ type: "UNFOLLOW", userId } as const);
export const setUsersAC = (users: Array<UserType>) => ({ type: "SET-USERS", users } as const);

export default usersReducer;
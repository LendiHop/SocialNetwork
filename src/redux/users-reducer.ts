import {ActionTypes, UsersType, UserType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
};

const usersReducer = (state: UsersType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
}

export const follow = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unfollow = (userId: number) => ({ type: UNFOLLOW, userId } as const);
export const setUsers = (users: Array<UserType>) => ({ type: SET_USERS, users } as const);
export const setCurrentPage = (n: number) => ({ type: SET_CURRENT_PAGE, currentPage: n } as const);
export const setTotalUsersCount = (n: number) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: n } as const);
export const toggleIsFetching = (b: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching: b } as const);

export default usersReducer;
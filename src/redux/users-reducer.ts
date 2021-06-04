import {ActionTypes, UsersType, UserType} from "./store";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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

export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unfollowAC = (userId: number) => ({ type: UNFOLLOW, userId } as const);
export const setUsersAC = (users: Array<UserType>) => ({ type: SET_USERS, users } as const);
export const setCurrentPageAC = (n: number) => ({ type: SET_CURRENT_PAGE, currentPage: n } as const);
export const setTotalUsersCountAC = (n: number) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: n } as const);
export const toggleIsFetchingAC = (b: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching: b } as const);

export default usersReducer;
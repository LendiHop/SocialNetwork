import {ActionTypes, UsersType, UserType} from "./store";
import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS";

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
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
            case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

export const followSuccess = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unfollowSuccess = (userId: number) => ({ type: UNFOLLOW, userId } as const);
export const setUsers = (users: Array<UserType>) => ({ type: SET_USERS, users } as const);
export const setCurrentPage = (n: number) => ({ type: SET_CURRENT_PAGE, currentPage: n } as const);
export const setTotalUsersCount = (n: number) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: n } as const);
export const toggleIsFetching = (b: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching: b } as const);
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress, userId } as const);

export const requestUsers = (page: number, pageSize: number) => {

    return (dispatch: (action: ActionTypes) => void) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    };
};

export const follow = (userId: number) => {

    return (dispatch: (action: ActionTypes) => void) => {
        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.follow(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    };
};

export const unfollow = (userId: number) => {

    return (dispatch: (action: ActionTypes) => void) => {
        dispatch(toggleFollowingProgress(true, userId));

        usersAPI.unfollow(userId).then(data => {
            if(data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    };
};

export default usersReducer;
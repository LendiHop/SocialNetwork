import {RootStateType} from "./store";
import {createSelector} from "reselect";

export const getUsers = createSelector((state: RootStateType) => state.usersPage.users, users => users);

export const getPageSize = createSelector((state: RootStateType) => state.usersPage.pageSize, pageSize => pageSize);

export const getTotalUsersCount = createSelector((state: RootStateType) => state.usersPage.totalUsersCount, totalUsersCount => totalUsersCount);

export const getCurrentPage = createSelector((state: RootStateType) => state.usersPage.currentPage, currentPage => currentPage);

export const getIsFetching = createSelector((state: RootStateType) => state.usersPage.isFetching, isFetching => isFetching);

export const getFollowingInProgress = createSelector((state: RootStateType) => state.usersPage.followingInProgress, followingInProgress => followingInProgress);
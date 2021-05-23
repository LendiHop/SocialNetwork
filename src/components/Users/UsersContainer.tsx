import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionTypes, RootStateType, UserType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch: (a: ActionTypes) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
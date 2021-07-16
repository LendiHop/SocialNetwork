import {RootStateType, UserType} from "../../redux/store";
import {
    follow, requestUsers,
    setCurrentPage,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress
} from "../../redux/users-selectors";

type UsersContainerPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (n: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    requestUsers: (currentPage: number, pageSize: number) => void
}

class UsersAPIContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// const mapStateToProps = (state: RootStateType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: RootStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        requestUsers,
    }),
)(UsersAPIContainer);
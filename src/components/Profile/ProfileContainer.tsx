import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, RootStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getProfileUserData, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchPropsType = {
    getProfileUserData: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: string
}

type OwnPropsType = MapStateToPropsType & MapDispatchPropsType;
type ProfileAPIContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        this.props.getProfileUserData(userId);
        setTimeout( () => {
            this.props.getStatus(userId);
        }, 1000 );
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}

const MapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export const ProfileContainer = compose<React.ComponentType>(
    connect(MapStateToProps,
        {
            getProfileUserData,
            getStatus,
            updateStatus,
        }),
    withRouter,
    withAuthRedirect,
)(ProfileAPIContainer);
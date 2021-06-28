import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, RootStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getProfileUserData} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    getProfileUserData: (userId: string) => void
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
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const MapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
});

export const ProfileContainer = compose<React.ComponentType>(
    connect(MapStateToProps,
        {
            getProfileUserData,
        }),
    withRouter,
    withAuthRedirect,
)(ProfileAPIContainer);
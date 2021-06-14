import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, RootStateType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (p: ProfileType) => void
}

type PathParamsType = {
    userId: string,
}

type OwnPropsType = MapStateToPropsType & MapDispatchPropsType;
type ProfileAPIContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        usersAPI.getProfile(userId).then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const MapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
});

const WithUrlDataContainerComponent = withRouter(ProfileAPIContainer);

export const ProfileContainer = connect(MapStateToProps,
    {
        setUserProfile,
    })(WithUrlDataContainerComponent);
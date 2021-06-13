import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, RootStateType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';

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
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
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
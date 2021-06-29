import React from 'react';
//import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/store";

type ProfileProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export function Profile(props: ProfileProps) {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}
import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostProps} from "./MyPosts/Post/Post";
import {ActionTypes} from "../../redux/state";

export type ProfileProps = {
    posts: Array<PostProps>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

export function Profile(props: ProfileProps) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}
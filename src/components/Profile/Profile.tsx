import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostProps} from "./MyPosts/Post/Post";

export type ProfileProps = {
    posts: Array<PostProps>
}

export function Profile(props: ProfileProps) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}
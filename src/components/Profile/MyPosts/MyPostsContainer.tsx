import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ActionTypes, RootStateType} from "../../../redux/store";
import {connect} from "react-redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: (a: ActionTypes) => void) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text));
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
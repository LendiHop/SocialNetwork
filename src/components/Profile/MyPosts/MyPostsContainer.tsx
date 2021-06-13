import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/store";
import {connect} from "react-redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText,
})(MyPosts);
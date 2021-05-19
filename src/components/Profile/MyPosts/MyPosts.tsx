import React from 'react';
import s from './MyPosts.module.css';
import {Post, PostProps} from "./Post/Post";
import {ActionTypes, addPostAC, updateNewPostTextAC} from "../../../redux/state";

type MyPostsProps = {
    posts: Array<PostProps>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

export function MyPosts(props: MyPostsProps) {

    const postsElements = props.posts.map(post => <Post id={post.id} name={post.name} ava={post.ava} message={post.message}
                                                  likeCounter={post.likeCounter}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch(addPostAC());
    }

    const onPostChange = () => {
        if(newPostElement.current) {
            props.dispatch(updateNewPostTextAC(newPostElement.current.value));
        }
    }

    return (
        <div className={s.content}>
            <div>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}
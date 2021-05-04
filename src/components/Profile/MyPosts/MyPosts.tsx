import React from 'react';
import s from './MyPosts.module.css';
import {Post, PostProps} from "./Post/Post";
import {DialogItemProps} from "../../Dialogs/DialogItem/DialogsItem";

type MyPostsProps = {
    posts: Array<PostProps>
}

export function MyPosts(props: MyPostsProps) {


    const postsElements = props.posts.map(post => <Post id={post.id} name={post.name} ava={post.ava} message={post.message}
                                                  likeCounter={post.likeCounter}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current?.value;
        alert(text);
    }

    return (
        <div className={s.content}>
            <div>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
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
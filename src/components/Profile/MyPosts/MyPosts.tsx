import React from 'react';
import s from './MyPosts.module.css';
import {Post, PostProps} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

type MyPostsProps = {
    posts: Array<PostProps>
    onAddPost: (newPostText: string) => void
}

type FormDataType = {
    newPostText: string
}

export function MyPosts(props: MyPostsProps) {

    const postsElements = props.posts.map(post => <Post id={post.id} key={post.id} name={post.name} ava={post.ava} message={post.message}
                                                  likeCounter={post.likeCounter}/>);

    const onAddPost = (values: FormDataType)=> {
        props.onAddPost(values.newPostText);
    }

    return (
        <div className={s.content}>
            <div>
                <h2>My posts</h2>
                <AddNewPostFormRedux onSubmit={onAddPost} />
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText" validate={ [required, maxLength10] } />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm);
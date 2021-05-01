import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div className={s.content}>
            <div>
                <h2>My posts</h2>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post name="Daniok" ava="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
                          message="SOme message 1" likeCounter={153}/>
                    <Post name="Daniok" ava="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
                          message="SOme message 2" likeCounter={152}/>
                    <Post name="Daniok" ava="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
                          message="SOme message 3" likeCounter={15}/>
                </div>
            </div>
        </div>
    );
}
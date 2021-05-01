import React from 'react';
import s from './Post.module.css';

type PostProps = {
    name: string,
    ava: string,
    message: string,
    likeCounter: number,
}

export function Post(props:PostProps) {
    return (
        <div className={s.item}>
            <img src={props.ava}/>
            <div><span>{props.name}</span></div>
            {props.message}
            <div><span>Like({props.likeCounter})</span></div>
        </div>
    );
}
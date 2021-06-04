import React from 'react';
import s from './Friend.module.css';

export type FriendType = {
    id: number
    name: string
    ava: string
}

export function Friend(props: FriendType) {
    return (
        <div className={s.friend}><img alt={"ava"} src={props.ava}/>{props.name}</div>
    );
}

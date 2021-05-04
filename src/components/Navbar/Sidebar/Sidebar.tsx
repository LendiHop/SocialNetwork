import React from 'react';
import s from './Sidebar.module.css';
import {Friend, FriendType} from "./Friend/Friend";

export type SidebarProps = {
    friends: Array<FriendType>
}

export function Sidebar(props: SidebarProps) {
    const sidebarElements = props.friends.map(el => <Friend name={el.name} id={el.id} ava={el.ava}/>);

    return (
        <nav className={s.nav}>
            <h3>Friends</h3>
            <div>{sidebarElements}</div>
        </nav>
    );
}
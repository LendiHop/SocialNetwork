import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

export type DialogItemProps = {
    name: string
    id: number
    ava: string
}

export function DialogItem(props: DialogItemProps) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}><img alt={"ava"} src={props.ava}/>{props.name}</NavLink>
        </div>
    );
}

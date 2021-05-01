import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

type DialogItemProps = {
    name: string,
    id: number,
}

function DialogItem(props: DialogItemProps) {
        return(
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        );
}

type MessageProps = {
    text: string,
}

function Message(props: MessageProps) {
    return(
        <div className="message">props.text</div>
    );
}

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name="Ashton" id={1}/>
                <DialogItem name="Metthew" id={2}/>
                <DialogItem name="Daniel" id={3}/>
                <DialogItem name="Tobi" id={4}/>
            </div>
            <div className={s.messages}>
                <Message text="Hi"/>
                <Message text="Hello"/>
                <Message text="Yo"/>
            </div>
        </div>
    );
}
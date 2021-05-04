import React from 'react';
import s from './Message.module.css';

export type MessageProps = {
    text: string
    id: number
}

export function Message(props: MessageProps) {
    return (
        <div className={s.message}>{props.text}</div>
    );
}

import React from 'react';
import s from './Dialogs.module.css';
import {Message, MessageProps} from "./Message/Message";
import {DialogItem, DialogItemProps} from "./DialogItem/DialogsItem";

export type DialogsProps = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageProps>
}

export function Dialogs(props: DialogsProps) {
    const dialogsElements = props.dialogs.map(el => <DialogItem ava={el.ava} name={el.name} id={el.id}/>);
    const messagesElements = props.messages.map(el => <Message text={el.text} id={el.id}/>);

    let newMessage = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        let text = newMessage.current?.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={ sendMessage }>Send</button>
                </div>
            </div>
        </div>
    );
}
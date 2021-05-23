import React from 'react';
import s from './Dialogs.module.css';
import {Message, MessageProps} from "./Message/Message";
import {DialogItem, DialogItemProps} from "./DialogItem/DialogsItem";

export type DialogsProps = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageProps>
    newMessageText: string
    sendMessage: () => void
    updateNewMessageText: (text: string) => void
}

export function Dialogs(props: DialogsProps) {
    const dialogsElements = props.dialogs.map(el => <DialogItem ava={el.ava} name={el.name} key={el.id} id={el.id}/>);
    const messagesElements = props.messages.map(el => <Message text={el.text} id={el.id} key={el.id}/>);

    let newMessage = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        props.sendMessage();
    }

    const onMessageChange = () => {
        if(newMessage.current) {
            props.updateNewMessageText(newMessage.current.value);
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea ref={newMessage} onChange={ onMessageChange } value={ props.newMessageText }></textarea>
                    </div>
                    <div>
                        <button onClick={ sendMessage }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
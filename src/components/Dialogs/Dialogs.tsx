import React from 'react';
import s from './Dialogs.module.css';
import {Message, MessageProps} from "./Message/Message";
import {DialogItem, DialogItemProps} from "./DialogItem/DialogsItem";
import {ActionTypes, sendMessageAC, updateNewMessageTextAC} from "../../redux/state";

export type DialogsProps = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageProps>
    dispatch: (action: ActionTypes) => void
    newMessageText: string
}

export function Dialogs(props: DialogsProps) {
    const dialogsElements = props.dialogs.map(el => <DialogItem ava={el.ava} name={el.name} id={el.id}/>);
    const messagesElements = props.messages.map(el => <Message text={el.text} id={el.id}/>);

    let newMessage = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        props.dispatch(sendMessageAC());
    }

    const onMessageChange = () => {
        if(newMessage.current) {
            props.dispatch(updateNewMessageTextAC(newMessage.current.value));
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
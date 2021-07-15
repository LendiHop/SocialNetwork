import React from 'react';
import s from './Dialogs.module.css';
import {Message, MessageProps} from "./Message/Message";
import {DialogItem, DialogItemProps} from "./DialogItem/DialogsItem";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import { Textarea } from '../Common/FormsControls/FormsControls';
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type DialogsProps = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageProps>
    sendMessage: (newMessageBody: string) => void
}

type FormDataType = {
    newMessageBody: string
}

export function Dialogs(props: DialogsProps) {
    const dialogsElements = props.dialogs.map(el => <DialogItem ava={el.ava} name={el.name} key={el.id} id={el.id}/>);
    const messagesElements = props.messages.map(el => <Message text={el.text} id={el.id} key={el.id}/>);

    const addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={ [required, maxLength50] } />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "DialogAddMessageForm"})(AddMessageForm);
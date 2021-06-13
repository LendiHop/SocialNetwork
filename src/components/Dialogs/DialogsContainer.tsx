import {sendMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText,
})(Dialogs);
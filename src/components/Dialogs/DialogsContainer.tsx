import {sendMessage} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        sendMessage,
    }),
    withAuthRedirect,
)(Dialogs);
import {ActionTypes, MessagesPageType} from "./store";
import {MessageProps} from "../components/Dialogs/Message/Message";

const SEND_MESSAGE =  "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT =  "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Ashton",
            ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
        },
        {
            id: 2,
            name: "Metthew",
            ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
        },
        {
            id: 3,
            name: "Daniel",
            ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
        },
        {
            id: 4,
            name: "Tobi",
            ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
        },
    ],
    messages: [
        {id: 1, text: "Hi"},
        {id: 2, text: "Hello"},
        {id: 3, text: "Yo"},
    ],
    newMessageText: "",
};

const dialogsReducer = (state: MessagesPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageProps = {
                id: 5,
                text: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: "",
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText,
            };

        default:
            return state;
    }
}

export const sendMessage = () => ({ type: SEND_MESSAGE } as const);
export const updateNewMessageText = (newText: string) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: newText } as const);

export default dialogsReducer;
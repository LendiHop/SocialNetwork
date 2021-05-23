import {ActionTypes, MessagesPageType} from "./store";
import {MessageProps} from "../components/Dialogs/Message/Message";

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
        case "SEND-MESSAGE":
            const newMessage: MessageProps = {
                id: 5,
                text: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: "",
            };

        case "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newMessageText: action.newText,
            };

        default:
            return state;
    }
}

export const sendMessageAC = () => ({ type: "SEND-MESSAGE" } as const);
export const updateNewMessageTextAC = (newText: string) => ({ type: "UPDATE-NEW-MESSAGE-TEXT", newText: newText } as const);

export default dialogsReducer;
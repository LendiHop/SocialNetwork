import {PostProps} from "../components/Profile/MyPosts/Post/Post";
import {FriendType} from "../components/Navbar/Sidebar/Friend/Friend";
import {DialogItemProps} from "../components/Dialogs/DialogItem/DialogsItem";
import {MessageProps} from "../components/Dialogs/Message/Message";

type ProfilePageType = {
    posts: Array<PostProps>
    newPostText: string
}

type MessagesPageType = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageProps>
    newMessageText: string
}

type SidebarType = {
    friends: Array<FriendType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}

type StoreType = {
    _state: RootStateType
    _callSubscriber: (s: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (s: RootStateType) => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageTextAC>;

export const addPostAC = () => ({ type: "ADD-POST" } as const);
export const updateNewPostTextAC = (newText: string) => ({ type: "UPDATE-NEW-POST-TEXT", newText: newText } as const);
export const sendMessageAC = () => ({ type: "SEND-MESSAGE" } as const);
export const updateNewMessageTextAC = (newText: string) => ({ type: "UPDATE-NEW-MESSAGE-TEXT", newText: newText } as const);

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "SOme message 1",
                    likeCounter: 153,
                    name: "Daniok",
                    ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
                },
                {
                    id: 2,
                    message: "SOme message 2",
                    likeCounter: 152,
                    name: "Daniok",
                    ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
                },
                {
                    id: 3,
                    message: "SOme message 3",
                    likeCounter: 15,
                    name: "Daniok",
                    ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
                },
            ],
            newPostText: "",
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [
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
                    name: "Tobi",
                    ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg"
                },
            ]
        },
    },
    _callSubscriber(s: RootStateType){},
    getState() {
        return this._state;
    },
    subscribe(observer: (s: RootStateType) => void) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionTypes) {
        if(action.type === "ADD-POST") {
            const newPost: PostProps = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounter: 0,
                name: "Daniok",
                ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
        else if(action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type === "SEND-MESSAGE") {
            const newMessage: MessageProps = {
                id: 5,
                text: this._state.messagesPage.newMessageText
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = "";
            this._callSubscriber(this._state);
        }
        else if(action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
        else {
            this._callSubscriber(this._state);
        }
    },
}
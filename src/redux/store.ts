import {PostProps} from "../components/Profile/MyPosts/Post/Post";
import {FriendType} from "../components/Navbar/Sidebar/Friend/Friend";
import {DialogItemProps} from "../components/Dialogs/DialogItem/DialogsItem";
import {MessageProps} from "../components/Dialogs/Message/Message";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {sendMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type ProfilePageType = {
    posts: Array<PostProps>
    newPostText: string
}

export type MessagesPageType = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageProps>
    newMessageText: string
}

export type SidebarType = {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}
import {PostProps} from "../components/Profile/MyPosts/Post/Post";
import {FriendType} from "../components/Navbar/Sidebar/Friend/Friend";
import {DialogItemProps} from "../components/Dialogs/DialogItem/DialogsItem";
import {MessageProps} from "../components/Dialogs/Message/Message";
import {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import {sendMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "./users-reducer";

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

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
}

type PhotosType = {
    small: string
    large: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
    usersPage: UsersType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (s: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (s: RootStateType) => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageTextAC> | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC>;
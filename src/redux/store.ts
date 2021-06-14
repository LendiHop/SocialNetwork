import {PostProps} from "../components/Profile/MyPosts/Post/Post";
import {FriendType} from "../components/Navbar/Sidebar/Friend/Friend";
import {DialogItemProps} from "../components/Dialogs/DialogItem/DialogsItem";
import {MessageProps} from "../components/Dialogs/Message/Message";
import {addPost, setUserProfile, updateNewPostText} from "./profile-reducer";
import {sendMessage, updateNewMessageText} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";

export type ProfilePageType = {
    posts: Array<PostProps>
    newPostText: string
    profile: ProfileType
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
    isFetching: boolean
    followingInProgress: Array<number>
}

export type dataType = {
    id: number
    email: string
    login: string
}

export type authType = {
    data: dataType
    isAuth: boolean
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
}

export type ProfileType = {
    aboutMe: string
    contacts: contactsType
    photos: PhotosType
    userId: number
    fullName: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
}

type contactsType = {
    facebook?: string
    website?: string
    vk?: string
    twitter?: string
    instagram?: string
    youtube?: string
    github?: string
    mainLink?: string
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
    auth: authType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (s: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (s: RootStateType) => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPost> | ReturnType<typeof updateNewPostText> | ReturnType<typeof sendMessage> | ReturnType<typeof updateNewMessageText> | ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> | ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData> | ReturnType<typeof toggleFollowingProgress>
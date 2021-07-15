import {PostProps} from "../components/Profile/MyPosts/Post/Post";
import {FriendType} from "../components/Navbar/Sidebar/Friend/Friend";
import {DialogItemProps} from "../components/Dialogs/DialogItem/DialogsItem";
import {MessageProps} from "../components/Dialogs/Message/Message";
import {onAddPost, setStatus, setUserProfile} from "./profile-reducer";
import {sendMessage} from "./dialogs-reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";

export type ProfilePageType = {
    posts: Array<PostProps>
    profile: ProfileType | null
    status: string
}

export type MessagesPageType = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageProps>
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

export type authType = {
    id: number | null,
    email: string | null,
    login: string | null,
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

export type ActionTypes = ReturnType<typeof onAddPost> | ReturnType<typeof sendMessage> | ReturnType<typeof followSuccess> | ReturnType<typeof unfollowSuccess> | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> | ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData> | ReturnType<typeof toggleFollowingProgress> | ReturnType<typeof setStatus>
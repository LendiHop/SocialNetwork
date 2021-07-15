import {ActionTypes, ProfilePageType, ProfileType} from "./store";
import {PostProps} from "../components/Profile/MyPosts/Post/Post";
import {profileAPI} from "../api/api";

let initialState = {
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
    profile: null,
    status: "",
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost: PostProps = {
                id: 5,
                message: action.newPostText,
                likeCounter: 0,
                name: "Daniok",
                ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            };

            case "SET_STATUS":
            return {
                ...state,
                status: action.status,
            };
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile,
            };

        default:
            return state;
    }
}

export const onAddPost = (newPostText: string) => ({ type: "ADD_POST", newPostText } as const);

export const setUserProfile = (p: ProfileType) => ({ type: "SET_USER_PROFILE", profile: p } as const);
export const setStatus = (status: string) => ({ type: "SET_STATUS", status } as const);

export const getProfileUserData = (userId: string) => {

    return (dispatch: (action: ActionTypes) => void) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    };
};

export const getStatus = (userId: string) => {

    return (dispatch: (action: ActionTypes) => void) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        });
    };
};

export const updateStatus = (status: string) => {

    return (dispatch: (action: ActionTypes) => void) => {
        profileAPI.updateStatus(status).then(data => {
            if(data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    };
};

export default profileReducer;
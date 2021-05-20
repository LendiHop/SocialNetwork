import {ActionTypes, ProfilePageType} from "./store";
import {PostProps} from "../components/Profile/MyPosts/Post/Post";

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
    newPostText: "",
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostProps = {
                id: 5,
                message: state.newPostText,
                likeCounter: 0,
                name: "Daniok",
                ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => ({ type: "ADD-POST" } as const);
export const updateNewPostTextAC = (newText: string) => ({ type: "UPDATE-NEW-POST-TEXT", newText: newText } as const);

export default profileReducer;
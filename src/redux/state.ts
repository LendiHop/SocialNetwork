import {ProfileProps} from "../components/Profile/Profile";
import {DialogsProps} from "../components/Dialogs/Dialogs";
import {SidebarProps} from "../components/Navbar/Sidebar/Sidebar";

export type RootStateType = {
    profilePage: ProfileProps
    messagesPage: DialogsProps
    sidebar: SidebarProps
}

export const state = {
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
        ]
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
        ]
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
}
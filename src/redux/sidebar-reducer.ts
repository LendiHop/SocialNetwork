import {ActionTypes, SidebarType} from "./store";

let initialState = {
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
};

const sidebarReducer = (state: SidebarType = initialState, action: ActionTypes) => {


    return state;
}

export default sidebarReducer;
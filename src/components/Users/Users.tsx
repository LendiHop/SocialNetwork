import React from 'react';
import s from './Users.module.css';
import {UserType} from "../../redux/store";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersPropsType) {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                name: "Ashton",
                ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
                status: "qwerty",
                location: {city: "Kiev", country: "Ukraine"},
                followed: true,
            },
            {
                id: 2,
                name: "Metthew",
                ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
                status: "qweaefaefvberty",
                location: {city: "Minsk", country: "Belarus"},
                followed: false,
            },
            {
                id: 3,
                name: "Tobi",
                ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
                status: "qwezdgnvyorty",
                location: {city: "Warsaw", country: "Poland"},
                followed: false,
            },
            {
                id: 4,
                name: "Moba",
                ava: "https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg",
                status: "qwezdgnvyordrtbnty",
                location: {city: "Las Vegas", country: "Usa"},
                followed: true,
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.ava} className={s.ava}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}
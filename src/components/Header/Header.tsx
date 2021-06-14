import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import {dataType} from "../../redux/store";

export type HeaderPropsType = {
    isAuth: boolean
    data: dataType
    setAuthUserData: (data: dataType) => void
}

export function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
                alt="orange"/>
            <div className={s.loginBlock}>
                { props.isAuth ? props.data.login : null }
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    );
}
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
                alt="orange"/>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }

            </div>
        </header>
    );
}
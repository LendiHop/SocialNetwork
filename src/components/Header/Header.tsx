import React from 'react';
import s from './Header.module.css';

export function Header() {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png"
                alt="orange"/>
        </header>
    );
}
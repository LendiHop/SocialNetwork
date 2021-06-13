import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";
import {Preloader} from "../../Common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt="mainimg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="ava"/>
                ava+description
            </div>
        </div>
    );
}
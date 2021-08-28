import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../entities/entities";
import unknown from '../../../assets/images/unknown.png'

type ProfileInfoPropsType = {
    profile: ProfileType
}

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div className={s.profileInfo}>
            <img className={s.avatar} src={props.profile.photos.large || unknown} alt={props.profile.fullName}/>
            <div>
                <div className={s.div}>
                    <p className={s.title}>Name: </p>
                    <p className={s.description}>{props.profile.fullName}</p>
                </div>
                <div className={s.div}>
                    <p className={s.title}>I'm looking a job: </p>
                    <p className={s.description}>{props.profile.lookingForAJob ? 'yes' : 'no'}</p>
                </div>
                <div className={s.div}>
                    <p className={s.title}>Status: </p>
                    <p className={s.description}>Such a good day! =)</p>
                </div>
                <div>
                    <p className={s.title}>About me: </p>
                    <p className={s.description}>{props.profile.aboutMe}</p>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;
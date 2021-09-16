import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../entities/entities";
import unknown from '../../../assets/images/unknown.png'
import ProfileStatus from './ProfileStatus';

type ProfileInfoPropsType = {
    profile: ProfileType
    profileStatus: string
    updateProfileStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    return (
        <div className={s.profileBox}>
            <img className={s.avatar} src={props.profile.photos.large || unknown} alt={props.profile.fullName}/>
            <div className={s.profileInfo}>
                <div className={s.div}>
                    <p className={s.name}>{props.profile.fullName}</p>
                </div>
                <div className={s.div}>
                    <ProfileStatus
                        status={props.profileStatus || 'Nothing yet...'}
                        updateProfileStatus={props.updateProfileStatus}/>
                </div>
                <div className={s.div}>
                    <p className={s.title}>I'm looking a job: </p>
                    <p className={s.description}>{props.profile.lookingForAJob ? 'yes' : 'no'}</p>
                </div>
                <div>
                    <p className={s.title}>About me: </p>
                    <p className={s.description}>{props.profile.aboutMe || 'Nothing yet...'}</p>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;
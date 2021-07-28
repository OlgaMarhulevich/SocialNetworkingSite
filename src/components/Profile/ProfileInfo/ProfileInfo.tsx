import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div className={s.profileInfo}>
            <img className={s.avatar} src='https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58-696x696.jpg' alt='avatar'/>
            <div>
                <p className={s.title}>About me</p>
                <p className={s.description}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec.
                </p>
            </div>

        </div>
    )
}

export default ProfileInfo;
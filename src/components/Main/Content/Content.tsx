import React from 'react';
import s from './Content.module.css';

function Content() {
    return (
        <div className={s.content}>
            <div className={s.image}></div>
            <div>ava + description</div>
            <div>my post
                <div>new post</div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    )
}

export default Content;
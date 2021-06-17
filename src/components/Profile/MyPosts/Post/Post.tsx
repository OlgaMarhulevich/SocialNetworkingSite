import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string,
    likesCount: number,
}

function Post (props: PostPropsType) {
    return (
        <div className={s.post}>
            <div className={s.postContent}>
                <img className={s.avatar}
                    src='ava.jpg' alt='Avatar'/>
                <div className={s.message}>{props.message}</div>
            </div>

            <div>
                <span>{props.likesCount} likes</span>
                <span className={s.like}>Like!</span>
                <button>Remove post</button>
            </div>
        </div>
    )
}

export default Post;
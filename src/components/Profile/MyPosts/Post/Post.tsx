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
                <img
                    src='https://uprostim.com/wp-content/uploads/2021/01/image128-25.jpg' alt='Avatar'/>
                <div className={s.message}>{props.message}</div>
            </div>

            <div>
                <span>{props.likesCount} likes</span>
                <span className={s.like}>Like!</span>
            </div>
        </div>
    )
}

export default Post;
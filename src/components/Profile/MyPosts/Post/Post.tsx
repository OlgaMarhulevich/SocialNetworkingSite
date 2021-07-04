import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    id: number
    message: string
    likesCount: number
    dispatch: (action: Object) => void
}

function Post (props: PostPropsType) {

    const removePostCallback = () => {
        props.dispatch({type: 'REMOVE-POST', id: props.id})
    }

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
                <button onClick={removePostCallback} className={s.button}>Remove post</button>
            </div>
        </div>
    )
}

export default Post;
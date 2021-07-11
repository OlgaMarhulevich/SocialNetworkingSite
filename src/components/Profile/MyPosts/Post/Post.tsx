import React from 'react';
import s from './Post.module.css';
import {addLikeActionCreator, removePostActionCreator} from "../../../../redux/profile-reducer";


type PostPropsType = {
    id: number
    message: string
    likesCount: number
    dispatch: (action: Object) => void
}

function Post (props: PostPropsType) {

    const removePostCallback = () => {
        props.dispatch(removePostActionCreator(props.id))
    }
    const addLikeCallback = () => {
        props.dispatch(addLikeActionCreator(props.id))
    }

    return (
        <div className={s.post}>
            <div className={s.postContent}>
                <img className={s.avatar}
                    src='ava.jpg' alt='Avatar'/>
                <div className={s.message}>{props.message}</div>
            </div>

            <div>
                <span className={s.likesCount}>{props.likesCount} likes</span>
                <button onClick={addLikeCallback} className={s.like}>Like!</button>
                <button onClick={removePostCallback} className={s.button}>Remove post</button>
            </div>
        </div>
    )
}

export default Post;
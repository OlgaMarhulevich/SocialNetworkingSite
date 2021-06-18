import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[]
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements =
        props.posts.map ( post => <Post message={post.message} likesCount={post.likesCount}/> )



   /* let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }*/

    return (
        <div>
            <p className={s.title}>My Posts</p>
            <div>
                <p className={s.newPost}>New post</p>
                {/*<textarea ref={newPostElement} placeholder='Your message...'/>*/}
                <textarea className={s.textarea} placeholder='Your message...'/>
                <div className={s.buttons}>
                    {/*<button onClick={addPost}>Add post</button>*/}
                    <button className={s.button}>Add post</button>
                </div>
            </div>
            { postsElements }
        </div>
    )
}

export default MyPosts;
import React from 'react';
import './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>My Posts
            <div>new post
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <Post message='Hi, how are you?' likesCount={5}/>
            <Post message="It's my first post!" likesCount={15}/>
</div>
)
}

export default MyPosts;
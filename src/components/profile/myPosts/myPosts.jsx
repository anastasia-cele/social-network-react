import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";

function MyPosts() {
    return (
        <div className={s.posts}>
            <div className={s.title}>
                My Posts
            </div>
            <div className={s.newPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.allposts}>
                <Post message="Hi, how are you?" likes="5"/>
                <Post message="It's my first post!" likes="20"/>
            </div>
        </div>

    )
};

export default MyPosts;
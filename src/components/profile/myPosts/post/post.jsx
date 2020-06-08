import React from "react";
import s from './post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            <div className={s.text}>
                <img src="https://i.ya-webdesign.com/images/avatar-png-1.png" alt=""/>
                <span>{props.message}</span>
            </div>
            <span>{props.likes}</span>
            <button>Like</button>
        </div>
    )
};

export default Post;
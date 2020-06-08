import React from "react";
import s from './profile.module.css';
import MyPosts from "./myPosts/myPosts";
import Cover from "./cover/cover";
import About from "./about/about";

function Profile() {
    return (
        <div className={s.content}>
            <Cover/>
            <About/>
            <MyPosts/>
        </div>
    )
};

export default Profile;
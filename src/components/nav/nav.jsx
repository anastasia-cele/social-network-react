import React from "react";
import s from './nav.module.css';

function Nav() {
    return (
        <nav>
            <div className={s.mainMenu}>
                <a href="">Profile</a>
                <a href="">Messages</a>
                <a href="">News</a>
                <a href="">Music</a>
            </div>
            <div className={s.settings}>
                <a href="">Settings</a>
            </div>
        </nav>
    )
};

export default Nav;
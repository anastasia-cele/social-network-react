import React from "react";
import s from './nav.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div className={s.mainMenu}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.settings}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Nav;
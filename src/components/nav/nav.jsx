import React from "react";
import s from './nav.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div className={s.mainMenu}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.settings}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Nav;
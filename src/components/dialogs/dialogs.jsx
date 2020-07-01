import React from "react";
import s from './dialogs.module.css';
import {NavLink} from "react-router-dom";

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs/id1">Anna</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/id2">Mike</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/id3">Joe</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/id4">Max</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/id5">Kitty</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className="item">Hi</div>
                <div className="item">How are you?</div>
                <div className="item">First message!</div>
            </div>
        </div>
    )
}

export default Dialogs;
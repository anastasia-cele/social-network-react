import React from "react";
import s from "./about.module.css"

function About() {
    return (
        <div className={s.about}>
            <div className={s.avatar}>
                <img src="https://i.ya-webdesign.com/images/avatar-png-1.png" alt=""/>
            </div>
            <div className={s.info}>
                <div className={s.name}>
                    Anastasija C.
                </div>
                <div className={s.description}>
                    <span>Date of birth: 10 november</span>
                    <span>City: Riga</span>
                    <span>Education: RMMT'20</span>
                    <span>Website: anastasiatsel.area.lv</span>
                </div>
            </div>
        </div>
    )
};

export default About;
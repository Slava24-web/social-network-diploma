import React from "react";
import Profile from "../Profile/Profile";
import SideBlock from "../SideBlock/SideBlock";
import style from "./Content.module.css"

const Content = () => {
    return (
        <div className={style.content}>
            <div className={style.contentWrapper}>
                <Profile/>
            </div>
            <SideBlock/>
        </div>
    );
}

export default Content;
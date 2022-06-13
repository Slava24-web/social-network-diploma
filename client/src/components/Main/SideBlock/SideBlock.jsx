import React from "react";
import style from "../Profile/Profile.module.css";
import Groups from "../Home/Groups/Groups";
import Members from "../Home/Members/Members";
import Events from "../Home/Events/Events";

const SideBlock = () => {
    return (
        <div className={style.sideBlock}>
            <Groups />
            <Members />
            <Events />
        </div>
    );
}

export default SideBlock;
import React from "react";
import style from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let url = "/messages/" + props.id;

    return (
        <NavLink to={url} className={props.active ? style.active : style.user} onClick={props.onClick}>
            <a href="">
                <img className={style.userPhoto} src={props.path} alt="User's avatar"/>
            </a>
            <div className={style.userInfo}>
                <a href="" className={style.userName}>{props.name}</a>
                <p className="info">{'Последнее сообщение...'}</p>
            </div>
        </NavLink>
    );
}

export default Dialog;
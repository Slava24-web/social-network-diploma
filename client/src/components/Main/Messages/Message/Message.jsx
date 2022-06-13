import React from "react";
import style from './Message.module.css';

const Message = (props) => {
    return (
        <div className={style.message}>
            <a href="#">
                <img src={props.pathAvatar} alt="User's avatar"/>
            </a>
            <div>
                <a href="#" className={style.name}>{props.name}</a>
                <span className={style.time}>{props.time}</span>
                <br/>
                <span className={style.text}>{props.text}</span>
            </div>
        </div>
    );
}

export default Message;
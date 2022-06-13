import React from 'react';
import style from "./Comment.module.css";

const Comment = (props) => {
    return (
        <div className={style.comment}>
            <div className={style.info}>
                <img src={props.avatarPath} alt="User's avatar"/>
                <p className={style.name}>
                    {props.name}
                </p>
            </div>

            <p className={style.text}>
                {props.text}
            </p>

            <p className={style.date}>
                {props.date}
            </p>

        </div>
    )
}

export default Comment;
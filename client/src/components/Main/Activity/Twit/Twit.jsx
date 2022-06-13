import React from "react";
import style from "./Twit.module.css";
import docPhoto from "../../../../assets/images/DOC.jpg";

const Twit = (props) => {
    return (
        <div className={style.twitt}>
            <div className={style.head}>
                <img src={docPhoto} alt="Avatar"/>
                <div className={style.title}>
                    <p><span className={style.orange}>{props.name}</span>{props.title}</p>
                    <p className={style.hours}>{props.time}</p>
                </div>
            </div>
            <div className={style.text}>
                {props.text}
            </div>
            <div className={style.buttons}>
                <i className={`fa fa-trash-o ${style.delete}`} aria-hidden="true" onClick={() => props.onDeletePost(props.id)}> Удалить</i>
            </div>
        </div>
    );
}

export default Twit;
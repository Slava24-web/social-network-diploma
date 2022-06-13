import React from "react";
import style from './Group.module.css';

const Group = (props) => {
    return (
        <div className={style.group}>
            <div className={style.cover}>
                <div className={style.members}>
                    <i className="fa fa-user-o" aria-hidden="true"/>&nbsp;
                    {props.members}
                </div>
                <a href="#">
                    <img src={props.pathCover} alt="Фоновое изображение сообщества"/>
                </a>
                <a href="#">
                    <img className={style.logo} src={props.pathLogo} alt="Аватар сообщества"/>
                    <div className={style.overlay}><span>+</span></div>
                </a>
            </div>

            <p className={style.name}>{props.name}</p>
            {/*<span className={style.time}>{props.time}</span>*/}
            <p className={style.text}>
                {props.text}
            </p>
            <div className={style.info}>
                <span>{props.status}</span>
                <div>
                    {props.joined
                        ? <button onClick={() => {props.leave(props.id)}} className={style.leave}>Покинуть</button>
                        : <button onClick={() => {props.join(props.id)}} className={style.join}>Вступить</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Group;
import React from "react";
import style from "./Member.module.css"
import userPhoto from "./../../../../assets/images/dummyuser.jpg"
import {NavLink} from "react-router-dom";

const Member = (props) => {
    return (
        <div className={style.member}>
            <div className={style.photo}>
                <NavLink to={'/profile/' + props.id}>
                    <img src={props.photos.large != null ? props.photos.large : userPhoto} alt="User's photo"/>
                </NavLink>
            </div>
            <div className={style.info}>
                <NavLink to={'/profile/' + props.id}>
                    <a href="" className={style.name}>{props.name}</a>
                </NavLink>
                <p className={style.status}>{props.status}</p>
                <div>
                    {props.followed
                        ? <button disabled={props.isFollowing.some(id => id === props.id)}
                                  onClick={() => {
                                      props.unsubscribe(props.id);
                                  }} className={style.unsubscribe}>Отписаться</button>

                        : <button disabled={props.isFollowing.some(id => id === props.id)}
                                  onClick={() => {
                                      props.subscribe(props.id);
                                  }} className={style.subscribe}>Подписаться</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Member;
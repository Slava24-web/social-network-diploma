import React from 'react';
import style from './User.module.css';

const User = (props) => {
    return (
        <div className={style.user}>
            <a href="#">
                <img className={style.userPhoto} src={props.path} alt="User's avatar" />
            </a>
            <div className={style.userInfo}>
                <a href="#" className={style.userName}>{props.name}</a>
                <p className="info">{props.info}</p>
            </div>
        </div>
    );
}

export default User;
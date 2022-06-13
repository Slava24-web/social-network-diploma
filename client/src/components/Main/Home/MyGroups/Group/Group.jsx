import React from 'react';
import style from './Group.module.css';

const Group = (props) => {
    return (
        <div className={style.groupBlock}>
            <a href="#">
                <img className={style.groupPhoto} src={props.path} alt="Group's avatar" />
            </a>
            <div className={style.groupInfo}>
                <a href="#" className={style.name}>{props.name}</a>
                <p className="info">{props.info}</p>
            </div>
        </div>
    );
}

export default Group;
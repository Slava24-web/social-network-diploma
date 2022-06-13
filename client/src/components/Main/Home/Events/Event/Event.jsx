import React from 'react';
import style from './Event.module.css';

const Event = (props) => {
    return (
        <div className={style.link}>
            <a href="#">{props.title}</a>
            <p className="info">{props.date}</p>
            <p className="info">{props.info}</p>
        </div>
    );
}

export default Event;
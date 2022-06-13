import React from 'react';
import style from './Block.module.css';

const Block = (props) => {
    return (
        <div className={style.block}>
            <div className={style.icon}>
                <i className={props.class} aria-hidden="true"/>
                <span>{props.text}</span>
            </div>
            <span className={style.number}>{props.number}</span>
        </div>
    );
}

export default Block;
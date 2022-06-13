import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.link}>
            <a href="#">
                <img className={style.linkPhoto} src={props.path} alt="Post avatar" />
            </a>
            <div className={style.linkInfo}>
                <a href="#" className={style.name}>{props.title}</a>
                <p className="info">{props.date}</p>
            </div>
        </div>
    );
}

export default Post;
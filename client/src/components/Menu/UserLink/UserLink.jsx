import React from "react";
import style from './UserLink.module.css';

const UserLink = (props) => {
    let friends = props.friends + " друзей";
    return (
        <div className={style.userLink}>
            <a href="#">
                <img className={style.userLinkPhoto} src={props.pathAvatar}
                     alt="User's avatar"/>
            </a>
            <div className={style.userLinkInfo}>
                <a href="#" className={style.name}>{props.name}</a>
                <p className="info">{friends}</p>
            </div>
        </div>
    );
}

export default UserLink;
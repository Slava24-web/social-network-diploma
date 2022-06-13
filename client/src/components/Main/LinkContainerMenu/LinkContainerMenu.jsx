import React from 'react';
import style from './LinkContainerMenu.module.css';
import {NavLink} from "react-router-dom";

const LinkContainerMenu = () => {
    return (
        <div className={style.menu}>
            <NavLink to="/activity">
                <i className="fa fa-list" aria-hidden="true"/>
                <span>Активность</span>
            </NavLink>
            <NavLink to="/profile">
                <i className="fa fa-user-o" aria-hidden="true"/>
                <span>Профиль</span>
            </NavLink>
            <NavLink to="/notifications">
                <i className="fa fa-bell-o" aria-hidden="true"/>
                <span>Уведомления</span>
            </NavLink>
            <NavLink to="/messages">
                <i className="fa fa-envelope-o" aria-hidden="true"/>
                <span>Сообщения</span>
            </NavLink>
            <NavLink to="/members">
                <i className="fa fa-user-plus" aria-hidden="true"/>
                <span>Участники</span>
            </NavLink>
            <NavLink to="/groups">
                <i className="fa fa-users" aria-hidden="true"/>
                <span>Сообщества</span>
            </NavLink>
            <NavLink to="/events">
                <i className="fa fa-calendar" aria-hidden="true"/>
                <span>События</span>
            </NavLink>
            <NavLink to="/settings">
                <i className="fa fa-cog" aria-hidden="true"/>
                <span>Настройки</span>
            </NavLink>
        </div>
    );
}

export default LinkContainerMenu;
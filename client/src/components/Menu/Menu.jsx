import React from 'react';
import style from './Menu.module.css';
import {NavLink} from "react-router-dom";
import UserLink from "./UserLink/UserLink";

const Menu = (props) => {
    let usersElements = props.users.map(user => <UserLink pathAvatar={user.pathAvatar} name={user.name}
                                                          friends={user.friends}/>);
    let activeUsersElements = props.activeUsers.map(user => <a href="#"><img className={style.activeMembers__avatar}
                                                                             src={user.pathAvatar}
                                                                             alt="Active members avatar"/></a>);

    return (
        <div className={`${props.isVisibleMenu}` ? `menu active ${style.menu}` : `menu ${style.menu}`}
             onClick={props.setUnvisibleMenuHandler}>
            <div className="blur"/>
            {/* Logo */}
            {/*<div className={style.logo}>*/}
            {/*    <a href="#"><img src="images/logo.png" alt="Logo"/></a>*/}
            {/*</div>*/}
            <div className="menuWrapper" onClick={e => e.stopPropagation()}>
                {/* Menu bar */}
                <nav className={style.menuBar}>
                    <NavLink activeClassName={style.activeLink} to="/activity" className={style.menuBar__link}>
                        <i className="fa fa-list" aria-hidden="true"/>Активность
                    </NavLink>
                    <NavLink activeClassName={style.activeLink} to="/profile" className={style.menuBar__link}>
                        <i className="fa fa-user" aria-hidden="true"/>Профиль
                    </NavLink>
                    <NavLink activeClassName={style.activeLink} to="/messages" className={style.menuBar__link}>
                        <i className="fa fa-envelope" aria-hidden="true"/>Сообщения
                    </NavLink>
                    <a href="http://localhost:3002" className={style.menuBar__link} target="_blank">
                        <i className="fa fa-video-camera"/>Переговорная
                    </a>
                    <NavLink activeClassName={style.activeLink} to="/notifications" className={style.menuBar__link}>
                        <i className="fa fa-bell" aria-hidden="true"/>Уведомления
                    </NavLink>
                    <NavLink activeClassName={style.activeLink} to="/events" className={style.menuBar__link}>
                        <i className="fa fa-calendar" aria-hidden="true"/>События
                    </NavLink>
                    <NavLink activeClassName={style.activeLink} to="/groups" className={style.menuBar__link}>
                        <i className="fa fa-users" aria-hidden="true"/>Сообщества
                    </NavLink>
                    <NavLink activeClassName={style.activeLink} to="/settings" className={style.menuBar__link}>
                        <i className="fa fa-cog" aria-hidden="true"/>Настройки
                    </NavLink>
                </nav>
                {/* Members */}
                <div className={style.members}>
                    <p className={style.menuSectionTitle}>Участники</p>
                    <div className="membersActive">
                        <NavLink activeClassName="activeMembersLink" to="/newestMembers"
                                 className="membersActive__link">Новые</NavLink>
                        <NavLink activeClassName="activeMembersLink" to="/activeMembers"
                                 className="membersActive__link">Активные</NavLink>
                        <NavLink activeClassName="activeMembersLink" to="/popularMembers"
                                 className="membersActive__link">Популярные</NavLink>
                    </div>
                    {usersElements}
                </div>
                {/* Recently active members */}
                <div className={style.activeMembers}>
                    <p className={style.menuSectionTitle}>Недавно активные участники</p>
                    <div className={style.activeMembers__block}>
                        {activeUsersElements}
                    </div>
                </div>
                {/* About us */}
                <div className={style.about}>
                    <p className={style.menuSectionTitle}>Контакты</p>
                    <p className={style.aboutText}>
                        {props.info.aboutText}
                    </p>
                    <div className={style.email}>
                        <i class="fa fa-envelope-o" aria-hidden="true"/>
                        {props.info.email}
                    </div>
                    <div className={style.phone}>
                        <i class="fa fa-phone" aria-hidden="true"/>
                        {props.info.phone}
                    </div>
                </div>
                {/* Bottom panel */}
                <div className={style.bottomPanel}>
                    <i onClick={props.setUnvisibleMenuHandler} className="fa fa-arrow-circle-o-left"
                       aria-hidden="true"/>
                </div>
            </div>
        </div>
    );
}

export default Menu;
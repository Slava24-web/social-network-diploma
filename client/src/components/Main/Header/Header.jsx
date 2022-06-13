import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/dummyuser.jpg";
import docPhoto from "../../../assets/images/DOC.jpg";
import {ReactComponent as MenuIcon} from "./../../../assets/images/hamburger_button_menu_icon_155296.svg";

const Header = (props) => {
    return (
        <header className={style.header}>
            {/* Navbar */}
            <div className={style.navbar}>
                <MenuIcon className={style.menuIcon} onClick={props.setVisibleMenuHandler}/>
                <nav className={style.navigation}>
                    <NavLink to="/home" className={style.navLink}>Домашняя</NavLink>
                    <NavLink to={"/activity"} className={style.navLink}>Активность</NavLink>
                    <NavLink to={"/members"} className={style.navLink}>Участники</NavLink>
                    <NavLink to={"/groups"} className={style.navLink}>Сообщества</NavLink>
                    <NavLink to={"/events"} className={style.navLink}>События</NavLink>
                </nav>

                <div className={style.searchBlock}>
                    {props.isAuthenticated
                        ? <div style={{color: "white"}}>
                            {props.login}
                            <span style={{cursor: "pointer", fontSize: 18, marginLeft: 20}} onClick={props.logout}>Выйти</span>
                        </div>
                        : (
                            <>
                                <NavLink to={'/login'} className={style.login}>Войти</NavLink>
                                <NavLink to={'/register'} className={style.login}>Регистрация</NavLink>
                            </>
                        )}
                    <a href="#" className={style.profileLogo} id={style.profileLogo}>
                        <img src={props.isAuthenticated ? docPhoto : userPhoto} alt="Avatar"/>
                    </a>
                </div>
                <input type="search" id={style.search} placeholder="Search"/>
            </div>
        </header>
    );
}

export default Header;
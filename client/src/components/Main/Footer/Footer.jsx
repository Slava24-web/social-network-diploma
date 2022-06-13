import React from 'react';
import style from './Footer.module.css';
import {NavLink} from "react-router-dom";


const Footer = () => {
    return (
        <div className={style.footer}>
            {/* Footer Wrapper */}
            <div className={style.wrapper}>
                {/* Footer block */}
                <div className={style.block}>
                    <p className={style.title}>Обратная связь</p>
                    <ul className={style.list}>
                        <li><a href="">Email</a></li>
                        <li><a href="">Помощь</a></li>
                        <li><a href="">Вопросы</a></li>
                        <li><a href="">База знаний</a></li>
                    </ul>
                </div>
                {/* Footer block */}
                <div className={style.block}>
                    <p className={style.title}>Сообщество</p>
                    <ul className={style.list}>
                        <li><a href="">Активность</a></li>
                        <li><a href="">Сообщества</a></li>
                        <li><a href="">Участники</a></li>
                    </ul>
                </div>
                {/* Footer block */}
                <div className={style.block}>
                    <p className={style.title}>Наши сервисы</p>
                    <ul className={style.list}>
                        <li><a href="">Наша миссия</a></li>
                        <li><a href="">Помощь/наши контакты</a></li>
                        <li><a href="">Политика конфиденциальности</a></li>
                        <li><a href="">Политика cookie</a></li>
                    </ul>
                </div>
                {/* Footer block */}
                <div className={style.block}>
                    <p className={style.title}>Администрация</p>
                    <ul className={style.list}>
                        <li><a href="">Реклама</a></li>
                        <li><a href="">Пресса</a></li>
                        <li><a href="">Развитие компании</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className={style.navigation}>
                <div className={style.copyright}>
                    Copyright © 2021 <a href="">network@gmail.com</a>
                </div>
                <nav>
                    <NavLink to="/home">
                        <span>Домашняя</span>
                    </NavLink>
                    <NavLink to="/activity">
                        <span>Активность</span>
                    </NavLink>
                    <NavLink to="/members">
                        <span>Участники</span>
                    </NavLink>
                    <NavLink to="/groups">
                        <span>Сообщества</span>
                    </NavLink>
                    <NavLink to="/events">
                        <span>События</span>
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Footer;
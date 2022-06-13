import React from "react";
import style from './Settings.module.css';
import LinkContainerMenu from "../LinkContainerMenu/LinkContainerMenu";
import SideBlock from "../SideBlock/SideBlock";

const Settings = () => {
    return (
        <div className={style.settings}>
            {/*<Cover state={props.user}/>*/}
            <div className={style.content}>
                <div className={style.contentWrapper}>
                    <LinkContainerMenu />

                    <div className={style.settingsContent}>
                        {/* Menu */}
                        <div className={style.activityMenu}>
                            <a href="#" className={style.link}>Основные</a>
                            <a href="#" className={style.link}>Почта</a>
                            <a href="#" className={style.link}>Видимость профиля</a>
                        </div>

                        {/* Password */}
                        <div className={style.password}>
                            <p>Текущий пароль (требуется для обновления электронной почты или изменения текущего пароля)</p>
                            <input type="password" />
                            <span>Забыли пароль?</span>
                        </div>

                        {/* Email */}
                        <div className={style.email}>
                            <p>Электронная почта</p>
                            <input type="email" placeholder={"Email"} />
                        </div>

                        {/* Change */}
                        <div className={style.change}>
                            <p>Изменить пароль (оставьте поле пустым, чтобы не менять)</p>
                            <input type="password" />
                            <span>Новый пароль</span>
                            <br/>
                            <input type="password" />
                            <span>Повторите пароль</span>
                        </div>

                        <button className={style.save}>Сохранить изменения</button>
                    </div>
                </div>
                <SideBlock />
            </div>
        </div>
    );
}

export default Settings;
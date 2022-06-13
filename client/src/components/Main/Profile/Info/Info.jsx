import React from "react";
import style from "./Info.module.css";

const Info = (props) => {
    return (
        <div className={style.info}>
            {/* Profile Info */}
            <div className={style.profileInfo}>
                <p className={style.title}>Информация профиля</p>
                <table className={style.keys}>
                    <tr className={style.key}>
                        <td>Имя пользователя</td>
                        {/*<td>{props.profile.fullName}</td>*/}
                    </tr>
                    <tr className={style.key}>
                        <td>Возраст</td>
                        {/*<td>{props.profile.aboutMe}</td>*/}
                    </tr>
                    <tr className={style.key}>
                        <td>Должность</td>
                        {/*<td>{props.profile.lookingForAJob}</td>*/}
                    </tr>
                    <tr className={style.key}>
                        <td>Имя</td>
                        <td>Святослав</td>
                    </tr>
                    <tr className={style.key}>
                        <td>Фамилия</td>
                        <td>Шубин</td>
                    </tr>
                    <tr className={style.key}>
                        <td>День рождения</td>
                        <td>2000-04-28</td>
                    </tr>
                    <tr className={style.key}>
                        <td>Страна</td>
                        <td>Россия</td>
                    </tr>
                    <tr className={style.key}>
                        <td>Город</td>
                        <td>Краснодар</td>
                    </tr>
                    <tr className={style.key}>
                        <td>Интересы</td>
                        {/*<td>{props.profile.lookingForAJobDescription}</td>*/}
                    </tr>
                </table>
            </div>

            {/* Cotacts */}
            <div className={style.profileInfo}>
                <p className={style.title}>Контакты</p>
                <table className={style.keys}>
                    <tr className={style.key}>
                        <td>Номер телефона</td>
                        <td>+7 (900) 123-45-67</td>
                    </tr>
                    <tr className={style.key}>
                        <td>Почта</td>
                        <td><a href="mailto:svyatoslav.shubin@gmail.com">shubinshoter24@gmail.com</a></td>
                    </tr>
                    <tr className={style.key}>
                        <td>Адрес</td>
                        <td>Россия, г. Краснодар</td>
                    </tr>

                </table>
            </div>

            {/* Social */}
            <div className={style.profileInfo}>
                <p className={style.title}>Социальные сети</p>
                <table className={style.keys}>
                    <tr className={style.key}>
                        <td>Веб-сайт</td>
                        {/*<td><a href="">{props.profile.contacts.website}</a></td>*/}
                    </tr>
                    <tr className={style.key}>
                        <td>Github</td>
                        {/*<td>{props.profile.contacts.github}</td>*/}
                    </tr>
                    <tr className={style.key}>
                        <td>VK</td>
                        {/*<td>{props.profile.contacts.vk}</td>*/}
                    </tr>
                    <tr className={style.key}>
                        <td>YouTube</td>
                        {/*<td>{props.profile.contacts.youtube}</td>*/}
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Info;
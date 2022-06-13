import React from "react";
import style from "../Info/Info.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/FormControls/FormControls";

const InfoForm = (props) => {
    return (
        <form className={style.info} onSubmit={props.handleSubmit}>
            {/* Profile Info */}
            <button className={style.save}>Сохранить изменения</button>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div className={style.profileInfo}>
                <p className={style.title}>Информация профиля</p>
                <table className={style.keys}>
                    <tr className={style.key}>
                        <td>Имя пользователя</td>
                        <td><Field component={Input}
                                   name='fullName'
                                   placeholder='Полное имя'
                        /></td>
                    </tr>
                    <tr className={style.key}>
                        <td>Возраст</td>
                        <td><Field component={Input}
                                   name='aboutMe'
                                   placeholder='Вам возраст'
                        /></td>
                    </tr>
                    <tr className={style.key}>
                        <td>Должность</td>
                        <td>Frontend-developer</td>
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
                        <td>Дата рождения</td>
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
                        <td><Field component={Textarea}
                                   name='lookingForAJobDescription'
                                   placeholder='Ваши интересы'
                        /></td>
                    </tr>
                </table>
            </div>

            {/* Cotacts */}
            <div className={style.profileInfo}>
                <p className={style.title}>Contacts</p>
                <table className={style.keys}>
                    <tr className={style.key}>
                        <td>Номер телефона</td>
                        <td>+7 (900) 123-45-67</td>
                    </tr>
                    <tr className={style.key}>
                        <td>Почта</td>
                        <td><a href="mailto:shubinshoter24@gmail.com">shubinshoter24@gmail.com</a></td>
                    </tr>
                    <tr className={style.key}>
                        <td>Адрес</td>
                        <td>Россия, г. Краснодар, ул. Красная 69</td>
                    </tr>

                </table>
            </div>

            {/* Social */}
            <div className={style.profileInfo}>
                <p className={style.title}>Социальные сети</p>
                <table className={style.keys}>
                    <tr className={style.key}>
                        <td>Веб-сайт</td>
                        <td><Field component={Input}
                                   name='contacts.website'
                                   placeholder="URL айта"
                        /></td>
                    </tr>
                    <tr className={style.key}>
                        <td>Github</td>
                        <td><Field component={Input}
                                   name='contacts.github'
                                   placeholder='Github'
                        /></td>
                    </tr>
                    <tr className={style.key}>
                        <td>VK</td>
                        <td><Field component={Input}
                                   name='contacts.vk'
                                   placeholder='VK'
                        /></td>
                    </tr>
                    <tr className={style.key}>
                        <td>Facebook</td>
                        <td><Field component={Input}
                                   name='contacts.facebook'
                                   placeholder='Facebook'
                        /></td>
                    </tr>
                    <tr className={style.key}>
                        <td>Instagram</td>
                        <td><Field component={Input}
                                   name='contacts.instagram'
                                   placeholder='Instagram'
                        /></td>
                    </tr>
                    <tr className={style.key}>
                        <td>Twitter</td>
                        <td><Field component={Input}
                                   name='contacts.twitter'
                                   placeholder='Twitter'
                        /></td>
                    </tr>
                    <tr className={style.key}>
                        <td>YouTube</td>
                        <td><Field component={Input}
                                   name='contacts.youtube'
                                   placeholder='YouTube'
                        /></td>
                    </tr>
                </table>
            </div>
        </form>
    );
}

const InfoReduxForm = reduxForm({
    form: 'editInfo'
})(InfoForm);

export default InfoReduxForm;
import React from 'react';
import style from './Activity.module.css';
import LinkContainerMenu from "../LinkContainerMenu/LinkContainerMenu";
import Twit from "./Twit/Twit";
import SideBlock from "../SideBlock/SideBlock";
import {Field, reduxForm, reset} from "redux-form";
import {Redirect} from "react-router-dom";
import {maxLength, required} from "../../../Utils/Validators/validators";
import {Input} from "../Common/FormControls/FormControls";
import docPhoto from './../../../assets/images/DOC.jpg';
import Preloader from "../Common/Preloader/Preloader";

// PureComponent для классов позволяет не писать метод shouldComponentUpdate
// он реализован в классе PureComponent
// Аналогичная оптимизация для функционального компонента React.memo
const Activity = React.memo(props => {
    if (!props.isAuthenticated) return <Redirect to='/login'/>
    if (!props.profile) return <Preloader />

    // let twitsElements = props.twits.map(twit => <Twit
    //                                                   title={"Тестовое объявление"}
    //                                                   time={Date.now()}
    //                                                   text={"Текст для пробного объявления. Текст средней длины!"}
    //                                                   // profile={props.profile}
    //                                                   onDeletePost={props.deletePost}
    //                                                   onAddComment={props.addComment}
    // />);

    let addPost = (values) => {
        props.onAddPost(values.twitBody);
    }

    return (
        <div className={style.activity}>
            <div className={style.content}>
                <div className={style.contentWrapper}>
                    <LinkContainerMenu/>

                    {/* Activity content */}
                    <div className={style.activityContent}>
                        {/* Menu */}
                        <div className={style.activityMenu}>
                            <a href="#" className={style.link}>Личные</a>
                            <a href="#" className={style.link}>Упоминания</a>
                            <a href="#" className={style.link}>Друзья</a>
                            <a href="#" className={style.link}>Сообщества</a>
                        </div>

                        {/* New twitt */}
                        <div className={style.newTwit}>
                            <img src={docPhoto} alt="Avatar"/>
                            <div className={style.whatsNew}>
                                <p>Что у вас нового?</p>
                                <ActivityReduxForm onSubmit={addPost}/>
                            </div>
                        </div>

                        {/* Twits */}
                        <div className={style.twits}>
                            <Twit
                                title={"Тестовое объявление"}
                                time={`${new Date().getDay()}.0${new Date().getMonth() + 1} ${new Date().getHours()}:0${new Date().getMinutes()}`}
                                text={"Текст для пробного объявления. Текст средней длины!"}
                                // profile={props.profile}
                                onDeletePost={props.deletePost}
                                onAddComment={props.addComment}
                            />
                        </div>
                    </div>
                </div>
                <SideBlock/>
            </div>
        </div>
    );
});

const maxLength512 = maxLength(512);

const ActivityForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Input}
                   name='twitBody'
                   className={style.newArea}
                   placeholder={"Что у вас нового?"}
                   validate={[required, maxLength512]}
            />
            <div className={style.buttons}>
                <button className={style.post}>Опубликовать</button>
            </div>
        </form>
    );
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('activity'));

const ActivityReduxForm = reduxForm({
    form: 'activity',
    onSubmitSuccess: afterSubmit
})(ActivityForm);

export default Activity;
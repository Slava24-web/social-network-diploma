import React, {useState} from 'react';
import style from './Profile.module.css';
import LinkContainerMenu from "../LinkContainerMenu/LinkContainerMenu";
import Cover from "../Cover/Cover";
import SideBlock from "../SideBlock/SideBlock";
import Info from "./Info/Info";
import Preloader from "../Common/Preloader/Preloader";
import InfoReduxForm from "./InfoForm/InfoForm";

const Profile = (props) => {
    const [editMode, setEditMode] = useState(false);

    // if (!props.profile) {
    //     return <Preloader/>
    // }
    // Обновление аватарки
    const updateAvatar = (e) => {
        if (e.target.files.length) {
            // Забираем файл (фотографию)
            props.saveAvatar(e.target.files[0]);
        }
    }

    // Отправка формы
    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => setEditMode(false));
    }

    return (
        <div className={style.profile}>
            <Cover profile={props.profile}
                   isOwner={props.isOwner}
                   status={props.status}
                   time={props.time}
                   updateStatus={props.updateStatus}
                   saveAvatar={props.saveAvatar}
            />
            <div className={style.content}>
                <div className={style.contentWrapper}>
                    <LinkContainerMenu/>

                    {/* Profile Content */}
                    <div className={style.profileContent}>
                        {/* Menu */}
                        <div className={style.profileMenu}>
                            {/* View */}
                            <span className={style.link} activeClassName={style.activeLink} onClick={() =>
                                setEditMode(false)
                            }>Просмотреть</span>

                            {/* Edit mode */}
                            {props.isOwner &&
                            <span className={style.link} activeClassName={style.activeLink} onClick={() =>
                                setEditMode(true)
                            }>Редактировать</span>}

                            {/* Change profile photo */}
                            {props.isOwner &&
                            (<label className={style.link} activeClassName={style.activeLink}>
                                    <input type="file"
                                           onChange={updateAvatar}
                                           className={style.updateAvatar}
                                    />
                                    Изменить фото профиля
                                </label>
                            )}
                        </div>

                        {editMode ? <InfoReduxForm initialValues={props.profile}
                                                   onSubmit={onSubmit}/>
                                                   : <Info profile={props.profile}/>}
                    </div>
                </div>
                <SideBlock/>
            </div>
        </div>
    );
};

export default Profile;
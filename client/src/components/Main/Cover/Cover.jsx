import React, {useState} from "react";
import style from "./Cover.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from './../../../assets/images/dummyuser.jpg';

const Cover = (props) => {
    const [coverUrl, setCoverUrl] = useState('https://aardvark.ghostpool.com/network/wp-content/uploads/buddypress/members/72/cover-image/5cbdda7157cd6-bp-cover-image.jpeg');

    // Обновление аватарки
    const updateAvatar = (e) => {
        if (e.target.files.length) {
            // Забираем файл (фотографию)
            props.saveAvatar(e.target.files[0]);
        }
    }

    const updateCover = (e) => {
        if (e.target.files.length) {
            setCoverUrl(window.URL.createObjectURL(e.target.files[0]));
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.cover} style={{backgroundImage: `url(${coverUrl})`}}/>
            {/* Block */}
            <div className={style.block}>
                {/* Avatar */}
                <img src={userPhoto} alt="User avatar"/>
                <div className={style.info}>
                    {/*<p className={style.name}>{props.profile.fullName}</p>*/}
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>

            {props.isOwner &&
            // Update avatar
            (<label className={style.updateAvatar}>
                <input type="file"
                       onChange={updateAvatar}
                       className={style.updateAvatar}
                />
                <i className="fa fa-user-o" aria-hidden="true"/>
                Изменить аватар
            </label>)}
            {/* Update cover */}
            <label className={style.updateCover}>
                <input type="file"
                       onChange={updateCover}
                       className={style.updateAvatar}
                />
                <i className="fa fa-camera" aria-hidden="true"/>
                Изменить обои
            </label>
        </div>
    );
}

export default Cover;
import React from "react";
import style from './Notifications.module.css';
import LinkContainerMenu from "../LinkContainerMenu/LinkContainerMenu";
import SideBlock from "../SideBlock/SideBlock";

const Notifications = () => {
    return (
        <div className={style.notifications}>
            {/*<Cover state={props.user}/>*/}
            <div className={style.content}>
                <div className={style.contentWrapper}>
                    <LinkContainerMenu />

                    <div className={style.notificationsContent}>
                        {/* Menu */}
                        <div className={style.activityMenu}>
                            <a href="#" className={style.link}>Непрочитаные</a>
                            <a href="#" className={style.link}>Прочитаные</a>
                        </div>

                        <div className={style.noNotif}>
                            У вас нет непрочитанных уведомлений.
                        </div>
                    </div>
                </div>
                <SideBlock />
            </div>
        </div>
    );
}

export default Notifications;
import React from "react";
import style from './Events.module.css';
import LinkContainerMenu from "../LinkContainerMenu/LinkContainerMenu";
import SideBlock from "../SideBlock/SideBlock";

const Events = (props) => {
    return (
        <div className={style.events}>
            {/*<Cover state={props.user}/>*/}
            <div className={style.content}>
                <div className={style.contentWrapper}>
                    <LinkContainerMenu />

                    <div className={style.eventsContent}>
                        {/* Menu */}
                        <div className={style.activityMenu}>
                            <a href="#" className={style.link}>Мои события</a>
                            <a href="#" className={style.link}>Локации</a>
                        </div>

                        <p className={style.title}>События</p>
                        <p className={style.text}>
                            {props.text}
                        </p>
                    </div>
                </div>
                <SideBlock />
            </div>
        </div>
    );
}

export default Events;
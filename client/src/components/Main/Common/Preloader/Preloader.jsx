import React from 'react';
import preloader from "../../../../assets/images/Spinner-1s-204px.svg";
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.wrapper}>
            <img src={preloader} alt='Preloader'/>
        </div>
    );
}

export default Preloader;
import s from "./Preloader.module.css";
import preloader from "../../assets/images/loading.gif";
import React from "react";

export const Preloader = () => {
    return <div className={s.loadingBox}>
        <img alt={'loading...'} className={s.loadingGif} src={preloader}/>
        <div>Loading...</div>
    </div>
}
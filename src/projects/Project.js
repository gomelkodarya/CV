import React from "react";
import style from './Project.module.css';

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <a className={style.btn} href={'#'}>View</a>
            </div>
            <h2 className={style.title}>{props.title}</h2>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}
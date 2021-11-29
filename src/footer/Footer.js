import React from "react";
import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Link} from "./Link";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Darya Gomelko</h2>
                <div className={style.linksBlock}>
                    <Link/>
                    <Link/>
                    <Link/>
                    <Link/>
                </div>
                <p>&copy; 2021 All Rights Reserved</p>
            </div>
        </div>
    )
}
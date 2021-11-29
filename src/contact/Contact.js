import React from "react";
import style from './Contact.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2>Contact</h2>
                <form className={style.form} action={'#'} method={'POST'} name={'feedback'}>
                    <input type={'text'} name={'name'} placeholder={'Ваше имя'}/>
                    <input type={'text'} name={'email'} placeholder={'Ваш email'}/>
                    <textarea name={'message'} placeholder={'Введите сообщение'}/>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    )
}